import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentCreateWithoutUserInput } from './comment-create-without-user.input';
export declare class CommentCreateOrConnectWithoutUserInput {
    where: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
    create: CommentCreateWithoutUserInput;
}
