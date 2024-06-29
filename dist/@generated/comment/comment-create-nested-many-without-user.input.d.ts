import { CommentCreateWithoutUserInput } from './comment-create-without-user.input';
import { CommentCreateOrConnectWithoutUserInput } from './comment-create-or-connect-without-user.input';
import { CommentCreateManyUserInputEnvelope } from './comment-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
export declare class CommentCreateNestedManyWithoutUserInput {
    create?: Array<CommentCreateWithoutUserInput>;
    connectOrCreate?: Array<CommentCreateOrConnectWithoutUserInput>;
    createMany?: CommentCreateManyUserInputEnvelope;
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
}
