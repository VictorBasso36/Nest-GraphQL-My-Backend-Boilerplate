import { AuthService } from './auth.service';
import { Auth } from './models/auth.model';
import { Token } from './models/token.model';
import { LoginInput } from './dto/login.input';
import { SignupInput } from './dto/signup.input';
import { RefreshTokenInput } from './dto/refresh-token.input';
import { PrismaService } from 'nestjs-prisma';
import { PasswordService } from './password.service';
import { ForgotPasswordInput, ForgotPasswordResponse, ResetPassResponse } from '../users/dto/forgot-password.input';
export declare class AuthResolver {
    private readonly auth;
    private prisma;
    private readonly passwordService;
    constructor(auth: AuthService, prisma: PrismaService, passwordService: PasswordService);
    forgotPassword(forgotPasswordData: ForgotPasswordInput): Promise<ForgotPasswordResponse>;
    resetPass(token: string, newPassword: string): Promise<ResetPassResponse>;
    signup(data: SignupInput): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    login({ email, password }: LoginInput): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    refreshToken({ token }: RefreshTokenInput): Promise<Token>;
    user(auth: Auth): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        password: string;
        firstname: string;
        lastname: string;
        role: import(".prisma/client").$Enums.Role;
        resetPasswordToken: string;
        resetPasswordExpires: Date;
        companyId: string;
    }>;
}
