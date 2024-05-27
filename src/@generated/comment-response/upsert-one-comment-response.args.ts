import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommentResponseWhereUniqueInput } from './comment-response-where-unique.input';
import { Type } from 'class-transformer';
import { CommentResponseCreateInput } from './comment-response-create.input';
import { CommentResponseUpdateInput } from './comment-response-update.input';

@ArgsType()
export class UpsertOneCommentResponseArgs {

    @Field(() => CommentResponseWhereUniqueInput, {nullable:false})
    @Type(() => CommentResponseWhereUniqueInput)
    where!: Prisma.AtLeast<CommentResponseWhereUniqueInput, 'id'>;

    @Field(() => CommentResponseCreateInput, {nullable:false})
    @Type(() => CommentResponseCreateInput)
    create!: CommentResponseCreateInput;

    @Field(() => CommentResponseUpdateInput, {nullable:false})
    @Type(() => CommentResponseUpdateInput)
    update!: CommentResponseUpdateInput;
}
