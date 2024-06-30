import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserOrderByWithRelationAndSearchRelevanceInput } from '../user/user-order-by-with-relation-and-search-relevance.input';
import { CommentWithoutCompanyOrderByRelevanceInput } from './comment-without-company-order-by-relevance.input';

@InputType()
export class CommentWithoutCompanyOrderByWithRelationAndSearchRelevanceInput {

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

    @Field(() => UserOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    User?: UserOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => CommentWithoutCompanyOrderByRelevanceInput, {nullable:true})
    _relevance?: CommentWithoutCompanyOrderByRelevanceInput;
}
