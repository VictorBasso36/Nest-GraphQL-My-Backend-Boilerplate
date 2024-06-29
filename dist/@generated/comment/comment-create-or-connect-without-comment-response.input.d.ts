import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentCreateWithoutCommentResponseInput } from './comment-create-without-comment-response.input';
export declare class CommentCreateOrConnectWithoutCommentResponseInput {
    where: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
    create: CommentCreateWithoutCommentResponseInput;
}
