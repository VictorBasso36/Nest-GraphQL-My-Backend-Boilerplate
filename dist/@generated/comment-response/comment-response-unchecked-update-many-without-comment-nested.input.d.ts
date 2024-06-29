import { CommentResponseCreateWithoutCommentInput } from './comment-response-create-without-comment.input';
import { CommentResponseCreateOrConnectWithoutCommentInput } from './comment-response-create-or-connect-without-comment.input';
import { CommentResponseUpsertWithWhereUniqueWithoutCommentInput } from './comment-response-upsert-with-where-unique-without-comment.input';
import { CommentResponseCreateManyCommentInputEnvelope } from './comment-response-create-many-comment-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CommentResponseWhereUniqueInput } from './comment-response-where-unique.input';
import { CommentResponseUpdateWithWhereUniqueWithoutCommentInput } from './comment-response-update-with-where-unique-without-comment.input';
import { CommentResponseUpdateManyWithWhereWithoutCommentInput } from './comment-response-update-many-with-where-without-comment.input';
import { CommentResponseScalarWhereInput } from './comment-response-scalar-where.input';
export declare class CommentResponseUncheckedUpdateManyWithoutCommentNestedInput {
    create?: Array<CommentResponseCreateWithoutCommentInput>;
    connectOrCreate?: Array<CommentResponseCreateOrConnectWithoutCommentInput>;
    upsert?: Array<CommentResponseUpsertWithWhereUniqueWithoutCommentInput>;
    createMany?: CommentResponseCreateManyCommentInputEnvelope;
    set?: Array<Prisma.AtLeast<CommentResponseWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<CommentResponseWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<CommentResponseWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<CommentResponseWhereUniqueInput, 'id'>>;
    update?: Array<CommentResponseUpdateWithWhereUniqueWithoutCommentInput>;
    updateMany?: Array<CommentResponseUpdateManyWithWhereWithoutCommentInput>;
    deleteMany?: Array<CommentResponseScalarWhereInput>;
}
