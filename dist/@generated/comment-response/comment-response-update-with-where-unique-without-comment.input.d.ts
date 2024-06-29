import { Prisma } from '@prisma/client';
import { CommentResponseWhereUniqueInput } from './comment-response-where-unique.input';
import { CommentResponseUpdateWithoutCommentInput } from './comment-response-update-without-comment.input';
export declare class CommentResponseUpdateWithWhereUniqueWithoutCommentInput {
    where: Prisma.AtLeast<CommentResponseWhereUniqueInput, 'id'>;
    data: CommentResponseUpdateWithoutCommentInput;
}
