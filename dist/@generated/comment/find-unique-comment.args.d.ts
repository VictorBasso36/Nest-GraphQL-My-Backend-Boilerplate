import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
export declare class FindUniqueCommentArgs {
    where: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
}
