import { CommentCreateWithoutUserInput } from './comment-create-without-user.input';
import { CommentCreateOrConnectWithoutUserInput } from './comment-create-or-connect-without-user.input';
import { CommentUpsertWithWhereUniqueWithoutUserInput } from './comment-upsert-with-where-unique-without-user.input';
import { CommentCreateManyUserInputEnvelope } from './comment-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentUpdateWithWhereUniqueWithoutUserInput } from './comment-update-with-where-unique-without-user.input';
import { CommentUpdateManyWithWhereWithoutUserInput } from './comment-update-many-with-where-without-user.input';
import { CommentScalarWhereInput } from './comment-scalar-where.input';
export declare class CommentUpdateManyWithoutUserNestedInput {
    create?: Array<CommentCreateWithoutUserInput>;
    connectOrCreate?: Array<CommentCreateOrConnectWithoutUserInput>;
    upsert?: Array<CommentUpsertWithWhereUniqueWithoutUserInput>;
    createMany?: CommentCreateManyUserInputEnvelope;
    set?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    update?: Array<CommentUpdateWithWhereUniqueWithoutUserInput>;
    updateMany?: Array<CommentUpdateManyWithWhereWithoutUserInput>;
    deleteMany?: Array<CommentScalarWhereInput>;
}
