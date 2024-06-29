import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutCommentInput } from './user-create-without-comment.input';
export declare class UserCreateOrConnectWithoutCommentInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'resetPasswordToken'>;
    create: UserCreateWithoutCommentInput;
}
