import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CommentOrderByWithRelationAndSearchRelevanceInput } from '../comment/comment-order-by-with-relation-and-search-relevance.input';
import { CommentResponseOrderByRelevanceInput } from './comment-response-order-by-relevance.input';

@InputType()
export class CommentResponseOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    CommentId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;

    @Field(() => CommentOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    Comment?: CommentOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => CommentResponseOrderByRelevanceInput, {nullable:true})
    _relevance?: CommentResponseOrderByRelevanceInput;
}
