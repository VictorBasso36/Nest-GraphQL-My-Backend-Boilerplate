import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentResponseCreateWithoutCommentInput } from './comment-response-create-without-comment.input';
import { Type } from 'class-transformer';
import { CommentResponseCreateOrConnectWithoutCommentInput } from './comment-response-create-or-connect-without-comment.input';
import { CommentResponseCreateManyCommentInputEnvelope } from './comment-response-create-many-comment-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CommentResponseWhereUniqueInput } from './comment-response-where-unique.input';

@InputType()
export class CommentResponseCreateNestedManyWithoutCommentInput {

    @Field(() => [CommentResponseCreateWithoutCommentInput], {nullable:true})
    @Type(() => CommentResponseCreateWithoutCommentInput)
    create?: Array<CommentResponseCreateWithoutCommentInput>;

    @Field(() => [CommentResponseCreateOrConnectWithoutCommentInput], {nullable:true})
    @Type(() => CommentResponseCreateOrConnectWithoutCommentInput)
    connectOrCreate?: Array<CommentResponseCreateOrConnectWithoutCommentInput>;

    @Field(() => CommentResponseCreateManyCommentInputEnvelope, {nullable:true})
    @Type(() => CommentResponseCreateManyCommentInputEnvelope)
    createMany?: CommentResponseCreateManyCommentInputEnvelope;

    @Field(() => [CommentResponseWhereUniqueInput], {nullable:true})
    @Type(() => CommentResponseWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentResponseWhereUniqueInput, 'id'>>;
}
