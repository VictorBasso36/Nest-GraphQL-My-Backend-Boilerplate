import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommentResponseUpdateInput } from './comment-response-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CommentResponseWhereUniqueInput } from './comment-response-where-unique.input';

@ArgsType()
export class UpdateOneCommentResponseArgs {

    @Field(() => CommentResponseUpdateInput, {nullable:false})
    @Type(() => CommentResponseUpdateInput)
    data!: CommentResponseUpdateInput;

    @Field(() => CommentResponseWhereUniqueInput, {nullable:false})
    @Type(() => CommentResponseWhereUniqueInput)
    where!: Prisma.AtLeast<CommentResponseWhereUniqueInput, 'id'>;
}
