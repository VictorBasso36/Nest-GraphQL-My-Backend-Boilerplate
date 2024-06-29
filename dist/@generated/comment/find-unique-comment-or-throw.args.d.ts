import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
export declare class FindUniqueCommentOrThrowArgs {
    where: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
}
