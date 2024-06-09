import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { CompanyOrderByWithRelationAndSearchRelevanceInput } from '../company/company-order-by-with-relation-and-search-relevance.input';
import { UserOrderByWithRelationAndSearchRelevanceInput } from '../user/user-order-by-with-relation-and-search-relevance.input';
import { CommentResponseOrderByRelationAggregateInput } from '../comment-response/comment-response-order-by-relation-aggregate.input';
import { CommentOrderByRelevanceInput } from './comment-order-by-relevance.input';

@InputType()
export class CommentOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    title?: SortOrderInput;

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
    companyId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    userId?: SortOrderInput;

    @Field(() => CompanyOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    Company?: CompanyOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => UserOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    User?: UserOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => CommentResponseOrderByRelationAggregateInput, {nullable:true})
    CommentResponse?: CommentResponseOrderByRelationAggregateInput;

    @Field(() => CommentOrderByRelevanceInput, {nullable:true})
    _relevance?: CommentOrderByRelevanceInput;
}
