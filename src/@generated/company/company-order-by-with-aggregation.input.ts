import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CompanyCountOrderByAggregateInput } from './company-count-order-by-aggregate.input';
import { CompanyMaxOrderByAggregateInput } from './company-max-order-by-aggregate.input';
import { CompanyMinOrderByAggregateInput } from './company-min-order-by-aggregate.input';

@InputType()
export class CompanyOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cnpj?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    location?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rating?: keyof typeof SortOrder;

    @Field(() => CompanyCountOrderByAggregateInput, {nullable:true})
    _count?: CompanyCountOrderByAggregateInput;

    @Field(() => CompanyMaxOrderByAggregateInput, {nullable:true})
    _max?: CompanyMaxOrderByAggregateInput;

    @Field(() => CompanyMinOrderByAggregateInput, {nullable:true})
    _min?: CompanyMinOrderByAggregateInput;
}
