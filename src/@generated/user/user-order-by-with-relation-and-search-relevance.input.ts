import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { CompanyOrderByWithRelationAndSearchRelevanceInput } from '../company/company-order-by-with-relation-and-search-relevance.input';
import { CommentOrderByRelationAggregateInput } from '../comment/comment-order-by-relation-aggregate.input';
import { UserOrderByRelevanceInput } from './user-order-by-relevance.input';

@InputType()
export class UserOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    firstname?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    lastname?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    resetPasswordToken?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    resetPasswordExpires?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    companyId?: SortOrderInput;

    @Field(() => CompanyOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    Company?: CompanyOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => CommentOrderByRelationAggregateInput, {nullable:true})
    Comment?: CommentOrderByRelationAggregateInput;

    @Field(() => UserOrderByRelevanceInput, {nullable:true})
    _relevance?: UserOrderByRelevanceInput;
}
