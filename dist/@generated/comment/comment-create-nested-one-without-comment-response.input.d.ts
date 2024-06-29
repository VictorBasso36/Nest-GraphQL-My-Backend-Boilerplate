import { CommentCreateWithoutCommentResponseInput } from './comment-create-without-comment-response.input';
import { CommentCreateOrConnectWithoutCommentResponseInput } from './comment-create-or-connect-without-comment-response.input';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
export declare class CommentCreateNestedOneWithoutCommentResponseInput {
    create?: CommentCreateWithoutCommentResponseInput;
    connectOrCreate?: CommentCreateOrConnectWithoutCommentResponseInput;
    connect?: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
}
