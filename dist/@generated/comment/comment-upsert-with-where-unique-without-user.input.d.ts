import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentUpdateWithoutUserInput } from './comment-update-without-user.input';
import { CommentCreateWithoutUserInput } from './comment-create-without-user.input';
export declare class CommentUpsertWithWhereUniqueWithoutUserInput {
    where: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
    update: CommentUpdateWithoutUserInput;
    create: CommentCreateWithoutUserInput;
}
