import { Role } from '../prisma/role.enum';
import { CommentCreateNestedManyWithoutUserInput } from '../comment/comment-create-nested-many-without-user.input';
export declare class UserCreateWithoutCompanyInput {
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
    Comment?: CommentCreateNestedManyWithoutUserInput;
}
