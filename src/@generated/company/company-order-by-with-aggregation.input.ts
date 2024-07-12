import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { CompanyCountOrderByAggregateInput } from './company-count-order-by-aggregate.input';
import { CompanyAvgOrderByAggregateInput } from './company-avg-order-by-aggregate.input';
import { CompanyMaxOrderByAggregateInput } from './company-max-order-by-aggregate.input';
import { CompanyMinOrderByAggregateInput } from './company-min-order-by-aggregate.input';
import { CompanySumOrderByAggregateInput } from './company-sum-order-by-aggregate.input';

@InputType()
export class CompanyOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    cnpj?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    location?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    urlImage?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    working?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    approved?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    removed?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    ratingCount?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    rating?: SortOrderInput;

    @Field(() => CompanyCountOrderByAggregateInput, {nullable:true})
    _count?: CompanyCountOrderByAggregateInput;

    @Field(() => CompanyAvgOrderByAggregateInput, {nullable:true})
    _avg?: CompanyAvgOrderByAggregateInput;

    @Field(() => CompanyMaxOrderByAggregateInput, {nullable:true})
    _max?: CompanyMaxOrderByAggregateInput;

    @Field(() => CompanyMinOrderByAggregateInput, {nullable:true})
    _min?: CompanyMinOrderByAggregateInput;

    @Field(() => CompanySumOrderByAggregateInput, {nullable:true})
    _sum?: CompanySumOrderByAggregateInput;
}
