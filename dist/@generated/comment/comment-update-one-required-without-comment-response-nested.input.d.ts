import { CommentCreateWithoutCommentResponseInput } from './comment-create-without-comment-response.input';
import { CommentCreateOrConnectWithoutCommentResponseInput } from './comment-create-or-connect-without-comment-response.input';
import { CommentUpsertWithoutCommentResponseInput } from './comment-upsert-without-comment-response.input';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentUpdateToOneWithWhereWithoutCommentResponseInput } from './comment-update-to-one-with-where-without-comment-response.input';
export declare class CommentUpdateOneRequiredWithoutCommentResponseNestedInput {
    create?: CommentCreateWithoutCommentResponseInput;
    connectOrCreate?: CommentCreateOrConnectWithoutCommentResponseInput;
    upsert?: CommentUpsertWithoutCommentResponseInput;
    connect?: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
    update?: CommentUpdateToOneWithWhereWithoutCommentResponseInput;
}
