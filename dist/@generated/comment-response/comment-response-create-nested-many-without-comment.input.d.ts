import { CommentResponseCreateWithoutCommentInput } from './comment-response-create-without-comment.input';
import { CommentResponseCreateOrConnectWithoutCommentInput } from './comment-response-create-or-connect-without-comment.input';
import { CommentResponseCreateManyCommentInputEnvelope } from './comment-response-create-many-comment-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CommentResponseWhereUniqueInput } from './comment-response-where-unique.input';
export declare class CommentResponseCreateNestedManyWithoutCommentInput {
    create?: Array<CommentResponseCreateWithoutCommentInput>;
    connectOrCreate?: Array<CommentResponseCreateOrConnectWithoutCommentInput>;
    createMany?: CommentResponseCreateManyCommentInputEnvelope;
    connect?: Array<Prisma.AtLeast<CommentResponseWhereUniqueInput, 'id'>>;
}
