import { Prisma } from '@prisma/client';
import { CommentResponseWhereUniqueInput } from './comment-response-where-unique.input';
import { CommentResponseCreateInput } from './comment-response-create.input';
import { CommentResponseUpdateInput } from './comment-response-update.input';
export declare class UpsertOneCommentResponseArgs {
    where: Prisma.AtLeast<CommentResponseWhereUniqueInput, 'id'>;
    create: CommentResponseCreateInput;
    update: CommentResponseUpdateInput;
}
