import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentCreateInput } from './comment-create.input';
import { CommentUpdateInput } from './comment-update.input';
export declare class UpsertOneCommentArgs {
    where: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
    create: CommentCreateInput;
    update: CommentUpdateInput;
}
