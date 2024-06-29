import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentUpdateWithoutUserInput } from './comment-update-without-user.input';
export declare class CommentUpdateWithWhereUniqueWithoutUserInput {
    where: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
    data: CommentUpdateWithoutUserInput;
}
