import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommentResponseWhereInput } from './comment-response-where.input';
import { Type } from 'class-transformer';
import { CommentResponseOrderByWithRelationAndSearchRelevanceInput } from './comment-response-order-by-with-relation-and-search-relevance.input';
import { Prisma } from '@prisma/client';
import { CommentResponseWhereUniqueInput } from './comment-response-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CommentResponseCountAggregateInput } from './comment-response-count-aggregate.input';
import { CommentResponseMinAggregateInput } from './comment-response-min-aggregate.input';
import { CommentResponseMaxAggregateInput } from './comment-response-max-aggregate.input';

@ArgsType()
export class CommentResponseAggregateArgs {

    @Field(() => CommentResponseWhereInput, {nullable:true})
    @Type(() => CommentResponseWhereInput)
    where?: CommentResponseWhereInput;

    @Field(() => [CommentResponseOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<CommentResponseOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => CommentResponseWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CommentResponseWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CommentResponseCountAggregateInput, {nullable:true})
    _count?: CommentResponseCountAggregateInput;

    @Field(() => CommentResponseMinAggregateInput, {nullable:true})
    _min?: CommentResponseMinAggregateInput;

    @Field(() => CommentResponseMaxAggregateInput, {nullable:true})
    _max?: CommentResponseMaxAggregateInput;
}
