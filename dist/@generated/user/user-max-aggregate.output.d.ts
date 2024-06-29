import { Role } from '../prisma/role.enum';
export declare class UserMaxAggregate {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    email?: string;
    password?: string;
    firstname?: string;
    lastname?: string;
    role?: keyof typeof Role;
    resetPasswordToken?: string;
    resetPasswordExpires?: Date | string;
    companyId?: string;
}
