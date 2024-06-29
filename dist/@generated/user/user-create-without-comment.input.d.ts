import { Role } from '../prisma/role.enum';
import { CompanyCreateNestedOneWithoutUserInput } from '../company/company-create-nested-one-without-user.input';
export declare class UserCreateWithoutCommentInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    email: string;
    password: string;
    firstname?: string;
    lastname?: string;
    role: keyof typeof Role;
    resetPasswordToken?: string;
    resetPasswordExpires?: Date | string;
    Company?: CompanyCreateNestedOneWithoutUserInput;
}
