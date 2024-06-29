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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const auth_service_1 = require("./auth.service");
const auth_model_1 = require("./models/auth.model");
const token_model_1 = require("./models/token.model");
const login_input_1 = require("./dto/login.input");
const signup_input_1 = require("./dto/signup.input");
const refresh_token_input_1 = require("./dto/refresh-token.input");
const user_model_1 = require("../@generated/user/user.model");
const nestjs_prisma_1 = require("nestjs-prisma");
const common_1 = require("@nestjs/common");
const password_service_1 = require("./password.service");
const forgot_password_input_1 = require("../users/dto/forgot-password.input");
const uuidv4_1 = require("uuidv4");
const nodemailer = require("nodemailer");
let AuthResolver = exports.AuthResolver = class AuthResolver {
    constructor(auth, prisma, passwordService) {
        this.auth = auth;
        this.prisma = prisma;
        this.passwordService = passwordService;
    }
    async forgotPassword(forgotPasswordData) {
        const user = await this.prisma.user.findUnique({
            where: { email: forgotPasswordData.email },
        });
        if (!user) {
            throw new common_1.BadRequestException('E-mail não encontrado.');
        }
        const resetToken = (0, uuidv4_1.uuid)();
        await this.prisma.user.update({
            where: { email: forgotPasswordData.email },
            data: {
                resetPasswordToken: resetToken,
                resetPasswordExpires: new Date(new Date().getTime() + 3600000),
            },
        });
        const resetPasswordUrl = `${process.env.AMBIENT === 'DEV' ? 'http://localhost:3001' : 'PROD'}/refresh-password?token=${resetToken}`;
        const transporter = nodemailer.createTransport({
            service: "Gmail",
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.SMTP_EMAIL,
                pass: process.env.SMTP_PASS,
            },
        });
        const mailOptions = {
            from: process.env.SMTP_EMAIL,
            to: forgotPasswordData?.email,
            subject: 'Redefinição de senha',
            html: `
        <p>Você solicitou a redefinição de sua senha. Clique no link abaixo para redefinir sua senha:</p>
        <a href="${resetPasswordUrl}">Redefinir senha</a>
        <p>Se você não solicitou essa alteração, por favor, ignore este e-mail.</p>
      `,
        };
        await transporter.sendMail(mailOptions);
        return {
            success: true,
            message: 'Um e-mail com instruções de redefinição de senha foi enviado.',
        };
    }
    async resetPass(token, newPassword) {
        const user = await this.prisma.user.findFirst({
            where: {
                resetPasswordToken: token,
                resetPasswordExpires: {
                    gt: new Date(),
                },
            },
        });
        if (!user) {
            throw new common_1.BadRequestException('Token inválido ou expirado.');
        }
        const hashedPassword = await this.passwordService.hashPassword(newPassword);
        await this.prisma.user.update({
            where: { id: user.id },
            data: {
                password: hashedPassword,
                resetPasswordToken: null,
                resetPasswordExpires: null,
            },
        });
        return {
            success: true,
            message: 'Senha redefinida com sucesso.',
        };
    }
    async signup(data) {
        data.email = data.email.toLowerCase();
        const { accessToken, refreshToken } = await this.auth.createUser(data);
        return {
            accessToken,
            refreshToken,
        };
    }
    async login({ email, password }) {
        const { accessToken, refreshToken } = await this.auth.login(email.toLowerCase(), password);
        return {
            accessToken,
            refreshToken,
        };
    }
    async refreshToken({ token }) {
        return this.auth.refreshToken(token);
    }
    async user(auth) {
        return await this.auth.getUserFromToken(auth.accessToken);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => forgot_password_input_1.ForgotPasswordResponse),
    __param(0, (0, graphql_1.Args)('forgotPasswordData')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [forgot_password_input_1.ForgotPasswordInput]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "forgotPassword", null);
__decorate([
    (0, graphql_1.Mutation)(() => forgot_password_input_1.ResetPassResponse),
    __param(0, (0, graphql_1.Args)('token')),
    __param(1, (0, graphql_1.Args)('newPassword')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "resetPass", null);
__decorate([
    (0, graphql_1.Mutation)(() => auth_model_1.Auth),
    __param(0, (0, graphql_1.Args)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signup_input_1.SignupInput]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "signup", null);
__decorate([
    (0, graphql_1.Mutation)(() => auth_model_1.Auth),
    __param(0, (0, graphql_1.Args)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_input_1.LoginInput]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "login", null);
__decorate([
    (0, graphql_1.Mutation)(() => token_model_1.Token),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [refresh_token_input_1.RefreshTokenInput]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "refreshToken", null);
__decorate([
    (0, graphql_1.ResolveField)('user', () => user_model_1.User),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_model_1.Auth]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "user", null);
exports.AuthResolver = AuthResolver = __decorate([
    (0, graphql_1.Resolver)(() => auth_model_1.Auth),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        nestjs_prisma_1.PrismaService,
        password_service_1.PasswordService])
], AuthResolver);
//# sourceMappingURL=auth.resolver.js.map