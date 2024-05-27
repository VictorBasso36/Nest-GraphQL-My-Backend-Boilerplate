import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CompanyOrderByWithRelationInput } from '../company/company-order-by-with-relation.input';
import { CommentResponseOrderByRelationAggregateInput } from '../comment-response/comment-response-order-by-relation-aggregate.input';

@InputType()
export class CommentOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rating?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    approved?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    companyId?: keyof typeof SortOrder;

    @Field(() => CompanyOrderByWithRelationInput, {nullable:true})
    Company?: CompanyOrderByWithRelationInput;

    @Field(() => CommentResponseOrderByRelationAggregateInput, {nullable:true})
    CommentResponse?: CommentResponseOrderByRelationAggregateInput;
}
