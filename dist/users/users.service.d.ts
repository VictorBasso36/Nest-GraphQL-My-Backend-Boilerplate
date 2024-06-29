import { PrismaService } from 'nestjs-prisma';
import { PasswordService } from '../auth/password.service';
import { ChangePasswordInput } from './dto/change-password.input';
import { UpdateUserInput } from './dto/update-user.input';
export declare class UsersService {
    private prisma;
    private passwordService;
    constructor(prisma: PrismaService, passwordService: PasswordService);
    updateUser(userId: string, newUserData: UpdateUserInput): import(".prisma/client").Prisma.Prisma__UserClient<{
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
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    changePassword(userId: string, userPassword: string, changePassword: ChangePasswordInput): Promise<{
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
