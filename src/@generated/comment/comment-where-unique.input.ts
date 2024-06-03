import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentWhereInput } from './comment-where.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { CompanyNullableRelationFilter } from '../company/company-nullable-relation-filter.input';
import { CommentResponseListRelationFilter } from '../comment-response/comment-response-list-relation-filter.input';

@InputType()
export class CommentWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [CommentWhereInput], {nullable:true})
    AND?: Array<CommentWhereInput>;

    @Field(() => [CommentWhereInput], {nullable:true})
    OR?: Array<CommentWhereInput>;

    @Field(() => [CommentWhereInput], {nullable:true})
    NOT?: Array<CommentWhereInput>;

    @Field(() => StringNullableFilter, {nullable:true})
    title?: StringNullableFilter;

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

    @Field(() => StringNullableFilter, {nullable:true})
    companyId?: StringNullableFilter;

    @Field(() => CompanyNullableRelationFilter, {nullable:true})
    Company?: CompanyNullableRelationFilter;

    @Field(() => CommentResponseListRelationFilter, {nullable:true})
    CommentResponse?: CommentResponseListRelationFilter;
}
