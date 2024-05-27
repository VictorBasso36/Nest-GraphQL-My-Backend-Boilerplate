import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommentResponseWhereUniqueInput } from './comment-response-where-unique.input';
import { Type } from 'class-transformer';
import { CommentResponseCreateWithoutCommentInput } from './comment-response-create-without-comment.input';

@InputType()
export class CommentResponseCreateOrConnectWithoutCommentInput {

    @Field(() => CommentResponseWhereUniqueInput, {nullable:false})
    @Type(() => CommentResponseWhereUniqueInput)
    where!: Prisma.AtLeast<CommentResponseWhereUniqueInput, 'id'>;

    @Field(() => CommentResponseCreateWithoutCommentInput, {nullable:false})
    @Type(() => CommentResponseCreateWithoutCommentInput)
    create!: CommentResponseCreateWithoutCommentInput;
}
