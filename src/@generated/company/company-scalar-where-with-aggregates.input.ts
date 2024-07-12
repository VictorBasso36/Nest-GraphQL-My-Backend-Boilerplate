import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { BoolNullableWithAggregatesFilter } from '../prisma/bool-nullable-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { FloatNullableWithAggregatesFilter } from '../prisma/float-nullable-with-aggregates-filter.input';

@InputType()
export class CompanyScalarWhereWithAggregatesInput {

    @Field(() => [CompanyScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CompanyScalarWhereWithAggregatesInput>;

    @Field(() => [CompanyScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CompanyScalarWhereWithAggregatesInput>;

    @Field(() => [CompanyScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CompanyScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    cnpj?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    location?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    urlImage?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    working?: StringNullableWithAggregatesFilter;

    @Field(() => BoolNullableWithAggregatesFilter, {nullable:true})
    approved?: BoolNullableWithAggregatesFilter;

    @Field(() => BoolNullableWithAggregatesFilter, {nullable:true})
    removed?: BoolNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    ratingCount?: IntNullableWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    rating?: FloatNullableWithAggregatesFilter;
}
