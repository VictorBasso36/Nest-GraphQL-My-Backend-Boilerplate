import { Prisma } from '@prisma/client';
import { CommentResponseWhereUniqueInput } from './comment-response-where-unique.input';
export declare class FindUniqueCommentResponseOrThrowArgs {
    where: Prisma.AtLeast<CommentResponseWhereUniqueInput, 'id'>;
}
