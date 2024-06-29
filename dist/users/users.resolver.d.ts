import { PrismaService } from 'nestjs-prisma';
import { UsersService } from './users.service';
import { User } from '../@generated/user/user.model';
import { ChangePasswordInput } from './dto/change-password.input';
import { UpdateUserInput } from './dto/update-user.input';
export declare class UsersResolver {
    private usersService;
    private prisma;
    constructor(usersService: UsersService, prisma: PrismaService);
    me(user: User): Promise<User>;
    updateUser(user: User, newUserData: UpdateUserInput): Promise<{
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
    changePassword(user: User, changePassword: ChangePasswordInput): Promise<{
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
