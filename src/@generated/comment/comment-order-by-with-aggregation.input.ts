import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { CommentCountOrderByAggregateInput } from './comment-count-order-by-aggregate.input';
import { CommentAvgOrderByAggregateInput } from './comment-avg-order-by-aggregate.input';
import { CommentMaxOrderByAggregateInput } from './comment-max-order-by-aggregate.input';
import { CommentMinOrderByAggregateInput } from './comment-min-order-by-aggregate.input';
import { CommentSumOrderByAggregateInput } from './comment-sum-order-by-aggregate.input';

@InputType()
export class CommentOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    title?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    serviceType?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    rating?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    approved?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    removed?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    resolved?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    companyId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    userId?: SortOrderInput;

    @Field(() => CommentCountOrderByAggregateInput, {nullable:true})
    _count?: CommentCountOrderByAggregateInput;

    @Field(() => CommentAvgOrderByAggregateInput, {nullable:true})
    _avg?: CommentAvgOrderByAggregateInput;

    @Field(() => CommentMaxOrderByAggregateInput, {nullable:true})
    _max?: CommentMaxOrderByAggregateInput;

    @Field(() => CommentMinOrderByAggregateInput, {nullable:true})
    _min?: CommentMinOrderByAggregateInput;

    @Field(() => CommentSumOrderByAggregateInput, {nullable:true})
    _sum?: CommentSumOrderByAggregateInput;
}
