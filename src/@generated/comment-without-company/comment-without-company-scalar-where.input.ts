import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class CommentWithoutCompanyScalarWhereInput {

    @Field(() => [CommentWithoutCompanyScalarWhereInput], {nullable:true})
    AND?: Array<CommentWithoutCompanyScalarWhereInput>;

    @Field(() => [CommentWithoutCompanyScalarWhereInput], {nullable:true})
    OR?: Array<CommentWithoutCompanyScalarWhereInput>;

    @Field(() => [CommentWithoutCompanyScalarWhereInput], {nullable:true})
    NOT?: Array<CommentWithoutCompanyScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    cnpj?: StringFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    rating?: FloatNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    title?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    serviceType?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    content?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    userId?: StringNullableFilter;
}
