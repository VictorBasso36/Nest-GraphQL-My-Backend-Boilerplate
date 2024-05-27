import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompanyWhereInput } from './company-where.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';
import { CommentListRelationFilter } from '../comment/comment-list-relation-filter.input';

@InputType()
export class CompanyWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    cnpj?: string;

    @Field(() => [CompanyWhereInput], {nullable:true})
    AND?: Array<CompanyWhereInput>;

    @Field(() => [CompanyWhereInput], {nullable:true})
    OR?: Array<CompanyWhereInput>;

    @Field(() => [CompanyWhereInput], {nullable:true})
    NOT?: Array<CompanyWhereInput>;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    location?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    rating?: StringFilter;

    @Field(() => UserListRelationFilter, {nullable:true})
    User?: UserListRelationFilter;

    @Field(() => CommentListRelationFilter, {nullable:true})
    Comment?: CommentListRelationFilter;
}
