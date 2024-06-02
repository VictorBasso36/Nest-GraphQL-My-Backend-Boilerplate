import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { FloatNullableWithAggregatesFilter } from '../prisma/float-nullable-with-aggregates-filter.input';
import { BoolNullableWithAggregatesFilter } from '../prisma/bool-nullable-with-aggregates-filter.input';

@InputType()
export class CommentScalarWhereWithAggregatesInput {

    @Field(() => [CommentScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CommentScalarWhereWithAggregatesInput>;

    @Field(() => [CommentScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CommentScalarWhereWithAggregatesInput>;

    @Field(() => [CommentScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CommentScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    content?: StringWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    rating?: FloatNullableWithAggregatesFilter;

    @Field(() => BoolNullableWithAggregatesFilter, {nullable:true})
    approved?: BoolNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    companyId?: StringWithAggregatesFilter;
}
