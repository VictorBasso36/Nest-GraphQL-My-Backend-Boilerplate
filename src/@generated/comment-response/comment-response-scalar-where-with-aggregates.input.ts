import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class CommentResponseScalarWhereWithAggregatesInput {

    @Field(() => [CommentResponseScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CommentResponseScalarWhereWithAggregatesInput>;

    @Field(() => [CommentResponseScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CommentResponseScalarWhereWithAggregatesInput>;

    @Field(() => [CommentResponseScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CommentResponseScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    CommentId?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    content?: StringWithAggregatesFilter;
}
