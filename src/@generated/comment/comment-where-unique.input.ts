import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentWhereInput } from './comment-where.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { CompanyRelationFilter } from '../company/company-relation-filter.input';
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

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    content?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    rating?: IntFilter;

    @Field(() => BoolFilter, {nullable:true})
    approved?: BoolFilter;

    @Field(() => StringFilter, {nullable:true})
    companyId?: StringFilter;

    @Field(() => CompanyRelationFilter, {nullable:true})
    Company?: CompanyRelationFilter;

    @Field(() => CommentResponseListRelationFilter, {nullable:true})
    CommentResponse?: CommentResponseListRelationFilter;
}
