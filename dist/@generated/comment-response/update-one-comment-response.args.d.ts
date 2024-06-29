import { CommentResponseUpdateInput } from './comment-response-update.input';
import { Prisma } from '@prisma/client';
import { CommentResponseWhereUniqueInput } from './comment-response-where-unique.input';
export declare class UpdateOneCommentResponseArgs {
    data: CommentResponseUpdateInput;
    where: Prisma.AtLeast<CommentResponseWhereUniqueInput, 'id'>;
}
