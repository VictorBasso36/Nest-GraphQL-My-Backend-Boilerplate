import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentWithoutCompanyOrderByRelevanceFieldEnum } from './comment-without-company-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class CommentWithoutCompanyOrderByRelevanceInput {

    @Field(() => [CommentWithoutCompanyOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof CommentWithoutCompanyOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
