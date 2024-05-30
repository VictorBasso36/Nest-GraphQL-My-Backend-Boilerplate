import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompanyOrderByRelevanceFieldEnum } from './company-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class CompanyOrderByRelevanceInput {

    @Field(() => [CompanyOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof CompanyOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
