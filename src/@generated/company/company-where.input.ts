import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';
import { CommentListRelationFilter } from '../comment/comment-list-relation-filter.input';

@InputType()
export class CompanyWhereInput {

    @Field(() => [CompanyWhereInput], {nullable:true})
    AND?: Array<CompanyWhereInput>;

    @Field(() => [CompanyWhereInput], {nullable:true})
    OR?: Array<CompanyWhereInput>;

    @Field(() => [CompanyWhereInput], {nullable:true})
    NOT?: Array<CompanyWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    cnpj?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    location?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    urlImage?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    working?: StringNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    approved?: BoolNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    removed?: BoolNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    ratingCount?: IntNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    rating?: FloatNullableFilter;

    @Field(() => UserListRelationFilter, {nullable:true})
    User?: UserListRelationFilter;

    @Field(() => CommentListRelationFilter, {nullable:true})
    Comment?: CommentListRelationFilter;
}
