import { Prisma } from '@prisma/client';
import { CommentResponseWhereUniqueInput } from './comment-response-where-unique.input';
import { CommentResponseUpdateWithoutCommentInput } from './comment-response-update-without-comment.input';
import { CommentResponseCreateWithoutCommentInput } from './comment-response-create-without-comment.input';
export declare class CommentResponseUpsertWithWhereUniqueWithoutCommentInput {
    where: Prisma.AtLeast<CommentResponseWhereUniqueInput, 'id'>;
    update: CommentResponseUpdateWithoutCommentInput;
    create: CommentResponseCreateWithoutCommentInput;
}
