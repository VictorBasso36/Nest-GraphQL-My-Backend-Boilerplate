import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommentResponseWhereUniqueInput } from './comment-response-where-unique.input';
import { Type } from 'class-transformer';
import { CommentResponseUpdateWithoutCommentInput } from './comment-response-update-without-comment.input';

@InputType()
export class CommentResponseUpdateWithWhereUniqueWithoutCommentInput {

    @Field(() => CommentResponseWhereUniqueInput, {nullable:false})
    @Type(() => CommentResponseWhereUniqueInput)
    where!: Prisma.AtLeast<CommentResponseWhereUniqueInput, 'id'>;

    @Field(() => CommentResponseUpdateWithoutCommentInput, {nullable:false})
    @Type(() => CommentResponseUpdateWithoutCommentInput)
    data!: CommentResponseUpdateWithoutCommentInput;
}
