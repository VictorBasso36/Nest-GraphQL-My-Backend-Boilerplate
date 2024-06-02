import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { CommentResponseCountOrderByAggregateInput } from './comment-response-count-order-by-aggregate.input';
import { CommentResponseMaxOrderByAggregateInput } from './comment-response-max-order-by-aggregate.input';
import { CommentResponseMinOrderByAggregateInput } from './comment-response-min-order-by-aggregate.input';

@InputType()
export class CommentResponseOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    CommentId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    approved?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;

    @Field(() => CommentResponseCountOrderByAggregateInput, {nullable:true})
    _count?: CommentResponseCountOrderByAggregateInput;

    @Field(() => CommentResponseMaxOrderByAggregateInput, {nullable:true})
    _max?: CommentResponseMaxOrderByAggregateInput;

    @Field(() => CommentResponseMinOrderByAggregateInput, {nullable:true})
    _min?: CommentResponseMinOrderByAggregateInput;
}
