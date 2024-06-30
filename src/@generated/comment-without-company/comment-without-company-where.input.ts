import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserNullableRelationFilter } from '../user/user-nullable-relation-filter.input';

@InputType()
export class CommentWithoutCompanyWhereInput {

    @Field(() => [CommentWithoutCompanyWhereInput], {nullable:true})
    AND?: Array<CommentWithoutCompanyWhereInput>;

    @Field(() => [CommentWithoutCompanyWhereInput], {nullable:true})
    OR?: Array<CommentWithoutCompanyWhereInput>;

    @Field(() => [CommentWithoutCompanyWhereInput], {nullable:true})
    NOT?: Array<CommentWithoutCompanyWhereInput>;

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

    @Field(() => UserNullableRelationFilter, {nullable:true})
    User?: UserNullableRelationFilter;
}
