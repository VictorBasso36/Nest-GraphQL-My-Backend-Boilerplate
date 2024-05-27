import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutCommentResponseInput } from './comment-create-without-comment-response.input';
import { Type } from 'class-transformer';
import { CommentCreateOrConnectWithoutCommentResponseInput } from './comment-create-or-connect-without-comment-response.input';
import { CommentUpsertWithoutCommentResponseInput } from './comment-upsert-without-comment-response.input';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentUpdateToOneWithWhereWithoutCommentResponseInput } from './comment-update-to-one-with-where-without-comment-response.input';

@InputType()
export class CommentUpdateOneRequiredWithoutCommentResponseNestedInput {

    @Field(() => CommentCreateWithoutCommentResponseInput, {nullable:true})
    @Type(() => CommentCreateWithoutCommentResponseInput)
    create?: CommentCreateWithoutCommentResponseInput;

    @Field(() => CommentCreateOrConnectWithoutCommentResponseInput, {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutCommentResponseInput)
    connectOrCreate?: CommentCreateOrConnectWithoutCommentResponseInput;

    @Field(() => CommentUpsertWithoutCommentResponseInput, {nullable:true})
    @Type(() => CommentUpsertWithoutCommentResponseInput)
    upsert?: CommentUpsertWithoutCommentResponseInput;

    @Field(() => CommentWhereUniqueInput, {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;

    @Field(() => CommentUpdateToOneWithWhereWithoutCommentResponseInput, {nullable:true})
    @Type(() => CommentUpdateToOneWithWhereWithoutCommentResponseInput)
    update?: CommentUpdateToOneWithWhereWithoutCommentResponseInput;
}
