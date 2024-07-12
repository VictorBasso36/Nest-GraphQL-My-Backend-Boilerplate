import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumRoleFilter } from '../prisma/enum-role-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { CompanyNullableRelationFilter } from '../company/company-nullable-relation-filter.input';
import { CommentListRelationFilter } from '../comment/comment-list-relation-filter.input';

@InputType()
export class UserWhereInput {

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    firstname?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    lastname?: StringNullableFilter;

    @Field(() => EnumRoleFilter, {nullable:true})
    role?: EnumRoleFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    resetPasswordToken?: StringNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    resetPasswordExpires?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    companyId?: StringNullableFilter;

    @Field(() => CompanyNullableRelationFilter, {nullable:true})
    Company?: CompanyNullableRelationFilter;

    @Field(() => CommentListRelationFilter, {nullable:true})
    Comment?: CommentListRelationFilter;
}
