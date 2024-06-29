"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const nestjs_prisma_1 = require("nestjs-prisma");
const client_1 = require("@prisma/client");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const password_service_1 = require("./password.service");
let AuthService = exports.AuthService = class AuthService {
    constructor(jwtService, prisma, passwordService, configService) {
        this.jwtService = jwtService;
        this.prisma = prisma;
        this.passwordService = passwordService;
        this.configService = configService;
    }
    async createUser(payload) {
        const hashedPassword = await this.passwordService.hashPassword(payload.password);
        try {
            const user = await this.prisma.user.create({
                data: {
                    ...payload,
                    password: hashedPassword,
                    role: 'USER',
                },
            });
            return this.generateTokens({
                userId: user.id,
            });
        }
        catch (e) {
            if (e instanceof client_1.Prisma.PrismaClientKnownRequestError &&
                e.code === 'P2002') {
                throw new common_1.ConflictException(`Email ${payload.email} Já está sendo usado.`);
            }
            throw new Error(e);
        }
    }
    async login(email, password) {
        const user = await this.prisma.user.findUnique({ where: { email } });
        if (!user) {
            throw new common_1.NotFoundException(`No user found for email: ${email}`);
        }
        const passwordValid = await this.passwordService.validatePassword(password, user.password);
        if (!passwordValid) {
            throw new common_1.BadRequestException('Invalid password');
        }
        return this.generateTokens({
            userId: user.id,
        });
    }
    validateUser(userId) {
        return this.prisma.user.findUnique({ where: { id: userId } });
    }
    getUserFromToken(token) {
        const id = this.jwtService.decode(token)['userId'];
        return this.prisma.user.findUnique({ where: { id } });
    }
    generateTokens(payload) {
        return {
            accessToken: this.generateAccessToken(payload),
            refreshToken: this.generateRefreshToken(payload),
        };
    }
    generateAccessToken(payload) {
        return this.jwtService.sign(payload);
    }
    generateRefreshToken(payload) {
        const securityConfig = this.configService.get('security');
        return this.jwtService.sign(payload, {
            secret: this.configService.get('JWT_REFRESH_SECRET'),
            expiresIn: securityConfig.refreshIn,
        });
    }
    refreshToken(token) {
        try {
            const { userId } = this.jwtService.verify(token, {
                secret: this.configService.get('JWT_REFRESH_SECRET'),
            });
            return this.generateTokens({
                userId,
            });
        }
        catch (e) {
            throw new common_1.UnauthorizedException();
        }
    }
};
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        nestjs_prisma_1.PrismaService,
        password_service_1.PasswordService,
        config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map