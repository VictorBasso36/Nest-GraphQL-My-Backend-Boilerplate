import { UserCreateWithoutCommentInput } from './user-create-without-comment.input';
import { UserCreateOrConnectWithoutCommentInput } from './user-create-or-connect-without-comment.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
export declare class UserCreateNestedOneWithoutCommentInput {
    create?: UserCreateWithoutCommentInput;
    connectOrCreate?: UserCreateOrConnectWithoutCommentInput;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'resetPasswordToken'>;
}
