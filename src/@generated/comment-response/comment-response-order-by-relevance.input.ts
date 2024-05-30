import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentResponseOrderByRelevanceFieldEnum } from './comment-response-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class CommentResponseOrderByRelevanceInput {

    @Field(() => [CommentResponseOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof CommentResponseOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
