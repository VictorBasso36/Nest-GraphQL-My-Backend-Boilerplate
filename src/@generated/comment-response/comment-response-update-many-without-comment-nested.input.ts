import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentResponseCreateWithoutCommentInput } from './comment-response-create-without-comment.input';
import { Type } from 'class-transformer';
import { CommentResponseCreateOrConnectWithoutCommentInput } from './comment-response-create-or-connect-without-comment.input';
import { CommentResponseUpsertWithWhereUniqueWithoutCommentInput } from './comment-response-upsert-with-where-unique-without-comment.input';
import { CommentResponseCreateManyCommentInputEnvelope } from './comment-response-create-many-comment-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CommentResponseWhereUniqueInput } from './comment-response-where-unique.input';
import { CommentResponseUpdateWithWhereUniqueWithoutCommentInput } from './comment-response-update-with-where-unique-without-comment.input';
import { CommentResponseUpdateManyWithWhereWithoutCommentInput } from './comment-response-update-many-with-where-without-comment.input';
import { CommentResponseScalarWhereInput } from './comment-response-scalar-where.input';

@InputType()
export class CommentResponseUpdateManyWithoutCommentNestedInput {

    @Field(() => [CommentResponseCreateWithoutCommentInput], {nullable:true})
    @Type(() => CommentResponseCreateWithoutCommentInput)
    create?: Array<CommentResponseCreateWithoutCommentInput>;

    @Field(() => [CommentResponseCreateOrConnectWithoutCommentInput], {nullable:true})
    @Type(() => CommentResponseCreateOrConnectWithoutCommentInput)
    connectOrCreate?: Array<CommentResponseCreateOrConnectWithoutCommentInput>;

    @Field(() => [CommentResponseUpsertWithWhereUniqueWithoutCommentInput], {nullable:true})
    @Type(() => CommentResponseUpsertWithWhereUniqueWithoutCommentInput)
    upsert?: Array<CommentResponseUpsertWithWhereUniqueWithoutCommentInput>;

    @Field(() => CommentResponseCreateManyCommentInputEnvelope, {nullable:true})
    @Type(() => CommentResponseCreateManyCommentInputEnvelope)
    createMany?: CommentResponseCreateManyCommentInputEnvelope;

    @Field(() => [CommentResponseWhereUniqueInput], {nullable:true})
    @Type(() => CommentResponseWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CommentResponseWhereUniqueInput, 'id'>>;

    @Field(() => [CommentResponseWhereUniqueInput], {nullable:true})
    @Type(() => CommentResponseWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CommentResponseWhereUniqueInput, 'id'>>;

    @Field(() => [CommentResponseWhereUniqueInput], {nullable:true})
    @Type(() => CommentResponseWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CommentResponseWhereUniqueInput, 'id'>>;

    @Field(() => [CommentResponseWhereUniqueInput], {nullable:true})
    @Type(() => CommentResponseWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentResponseWhereUniqueInput, 'id'>>;

    @Field(() => [CommentResponseUpdateWithWhereUniqueWithoutCommentInput], {nullable:true})
    @Type(() => CommentResponseUpdateWithWhereUniqueWithoutCommentInput)
    update?: Array<CommentResponseUpdateWithWhereUniqueWithoutCommentInput>;

    @Field(() => [CommentResponseUpdateManyWithWhereWithoutCommentInput], {nullable:true})
    @Type(() => CommentResponseUpdateManyWithWhereWithoutCommentInput)
    updateMany?: Array<CommentResponseUpdateManyWithWhereWithoutCommentInput>;

    @Field(() => [CommentResponseScalarWhereInput], {nullable:true})
    @Type(() => CommentResponseScalarWhereInput)
    deleteMany?: Array<CommentResponseScalarWhereInput>;
}
