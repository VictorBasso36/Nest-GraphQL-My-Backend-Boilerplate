import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';

@InputType()
export class CommentScalarWhereInput {

    @Field(() => [CommentScalarWhereInput], {nullable:true})
    AND?: Array<CommentScalarWhereInput>;

    @Field(() => [CommentScalarWhereInput], {nullable:true})
    OR?: Array<CommentScalarWhereInput>;

    @Field(() => [CommentScalarWhereInput], {nullable:true})
    NOT?: Array<CommentScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    title?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    serviceType?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    content?: StringFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    rating?: FloatNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    approved?: BoolNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    removed?: BoolNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    companyId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    userId?: StringNullableFilter;
}
