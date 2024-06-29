import { Prisma } from '@prisma/client';
import { CommentResponseWhereUniqueInput } from './comment-response-where-unique.input';
import { CommentResponseCreateWithoutCommentInput } from './comment-response-create-without-comment.input';
export declare class CommentResponseCreateOrConnectWithoutCommentInput {
    where: Prisma.AtLeast<CommentResponseWhereUniqueInput, 'id'>;
    create: CommentResponseCreateWithoutCommentInput;
}
