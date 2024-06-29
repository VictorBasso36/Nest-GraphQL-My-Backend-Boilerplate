import { Prisma } from '@prisma/client';
import { CommentResponseWhereUniqueInput } from './comment-response-where-unique.input';
export declare class FindUniqueCommentResponseArgs {
    where: Prisma.AtLeast<CommentResponseWhereUniqueInput, 'id'>;
}
