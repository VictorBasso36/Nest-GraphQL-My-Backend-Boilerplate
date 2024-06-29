import { Role } from '../prisma/role.enum';
import { CommentUncheckedCreateNestedManyWithoutUserInput } from '../comment/comment-unchecked-create-nested-many-without-user.input';
export declare class UserUncheckedCreateWithoutCompanyInput {
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
    Comment?: CommentUncheckedCreateNestedManyWithoutUserInput;
}
