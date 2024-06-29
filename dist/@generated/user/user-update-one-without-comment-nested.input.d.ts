import { UserCreateWithoutCommentInput } from './user-create-without-comment.input';
import { UserCreateOrConnectWithoutCommentInput } from './user-create-or-connect-without-comment.input';
import { UserUpsertWithoutCommentInput } from './user-upsert-without-comment.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutCommentInput } from './user-update-to-one-with-where-without-comment.input';
export declare class UserUpdateOneWithoutCommentNestedInput {
    create?: UserCreateWithoutCommentInput;
    connectOrCreate?: UserCreateOrConnectWithoutCommentInput;
    upsert?: UserUpsertWithoutCommentInput;
    disconnect?: UserWhereInput;
    delete?: UserWhereInput;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'resetPasswordToken'>;
    update?: UserUpdateToOneWithWhereWithoutCommentInput;
}
