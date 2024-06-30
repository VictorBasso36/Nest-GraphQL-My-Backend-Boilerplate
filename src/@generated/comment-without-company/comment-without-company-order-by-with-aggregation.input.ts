import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { CommentWithoutCompanyCountOrderByAggregateInput } from './comment-without-company-count-order-by-aggregate.input';
import { CommentWithoutCompanyAvgOrderByAggregateInput } from './comment-without-company-avg-order-by-aggregate.input';
import { CommentWithoutCompanyMaxOrderByAggregateInput } from './comment-without-company-max-order-by-aggregate.input';
import { CommentWithoutCompanyMinOrderByAggregateInput } from './comment-without-company-min-order-by-aggregate.input';
import { CommentWithoutCompanySumOrderByAggregateInput } from './comment-without-company-sum-order-by-aggregate.input';

@InputType()
export class CommentWithoutCompanyOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cnpj?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    rating?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    title?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    serviceType?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    userId?: SortOrderInput;

    @Field(() => CommentWithoutCompanyCountOrderByAggregateInput, {nullable:true})
    _count?: CommentWithoutCompanyCountOrderByAggregateInput;

    @Field(() => CommentWithoutCompanyAvgOrderByAggregateInput, {nullable:true})
    _avg?: CommentWithoutCompanyAvgOrderByAggregateInput;

    @Field(() => CommentWithoutCompanyMaxOrderByAggregateInput, {nullable:true})
    _max?: CommentWithoutCompanyMaxOrderByAggregateInput;

    @Field(() => CommentWithoutCompanyMinOrderByAggregateInput, {nullable:true})
    _min?: CommentWithoutCompanyMinOrderByAggregateInput;

    @Field(() => CommentWithoutCompanySumOrderByAggregateInput, {nullable:true})
    _sum?: CommentWithoutCompanySumOrderByAggregateInput;
}
