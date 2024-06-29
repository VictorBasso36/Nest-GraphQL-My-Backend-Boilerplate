import { PrismaService } from 'nestjs-prisma';
import { User } from '@prisma/client';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PasswordService } from './password.service';
import { SignupInput } from './dto/signup.input';
import { Token } from './models/token.model';
export declare class AuthService {
    private readonly jwtService;
    private readonly prisma;
    private readonly passwordService;
    private readonly configService;
    constructor(jwtService: JwtService, prisma: PrismaService, passwordService: PasswordService, configService: ConfigService);
    createUser(payload: SignupInput): Promise<Token>;
    login(email: string, password: string): Promise<Token>;
    validateUser(userId: string): Promise<User>;
    getUserFromToken(token: string): Promise<User>;
    generateTokens(payload: {
        userId: string;
    }): Token;
    private generateAccessToken;
    private generateRefreshToken;
    refreshToken(token: string): Token;
}
