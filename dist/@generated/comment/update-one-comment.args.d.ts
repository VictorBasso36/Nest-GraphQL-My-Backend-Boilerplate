import { CommentUpdateInput } from './comment-update.input';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
export declare class UpdateOneCommentArgs {
    data: CommentUpdateInput;
    where: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
}
