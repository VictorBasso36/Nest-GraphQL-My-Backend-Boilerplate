import { Prisma } from '@prisma/client';
import { CommentResponseWhereUniqueInput } from './comment-response-where-unique.input';
export declare class DeleteOneCommentResponseArgs {
    where: Prisma.AtLeast<CommentResponseWhereUniqueInput, 'id'>;
}
