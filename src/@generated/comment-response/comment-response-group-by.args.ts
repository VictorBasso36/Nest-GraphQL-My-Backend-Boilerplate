import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommentResponseWhereInput } from './comment-response-where.input';
import { Type } from 'class-transformer';
import { CommentResponseOrderByWithAggregationInput } from './comment-response-order-by-with-aggregation.input';
import { CommentResponseScalarFieldEnum } from './comment-response-scalar-field.enum';
import { CommentResponseScalarWhereWithAggregatesInput } from './comment-response-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CommentResponseCountAggregateInput } from './comment-response-count-aggregate.input';
import { CommentResponseMinAggregateInput } from './comment-response-min-aggregate.input';
import { CommentResponseMaxAggregateInput } from './comment-response-max-aggregate.input';

@ArgsType()
export class CommentResponseGroupByArgs {

    @Field(() => CommentResponseWhereInput, {nullable:true})
    @Type(() => CommentResponseWhereInput)
    where?: CommentResponseWhereInput;

    @Field(() => [CommentResponseOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CommentResponseOrderByWithAggregationInput>;

    @Field(() => [CommentResponseScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CommentResponseScalarFieldEnum>;

    @Field(() => CommentResponseScalarWhereWithAggregatesInput, {nullable:true})
    having?: CommentResponseScalarWhereWithAggregatesInput;

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
