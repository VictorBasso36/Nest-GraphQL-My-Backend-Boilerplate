import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { Type } from 'class-transformer';
import { CommentCreateWithoutCommentResponseInput } from './comment-create-without-comment-response.input';

@InputType()
export class CommentCreateOrConnectWithoutCommentResponseInput {

    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;

    @Field(() => CommentCreateWithoutCommentResponseInput, {nullable:false})
    @Type(() => CommentCreateWithoutCommentResponseInput)
    create!: CommentCreateWithoutCommentResponseInput;
}
