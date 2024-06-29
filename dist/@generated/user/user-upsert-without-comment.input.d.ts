import { UserUpdateWithoutCommentInput } from './user-update-without-comment.input';
import { UserCreateWithoutCommentInput } from './user-create-without-comment.input';
import { UserWhereInput } from './user-where.input';
export declare class UserUpsertWithoutCommentInput {
    update: UserUpdateWithoutCommentInput;
    create: UserCreateWithoutCommentInput;
    where?: UserWhereInput;
}
