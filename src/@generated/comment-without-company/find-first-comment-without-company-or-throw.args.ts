import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommentWithoutCompanyWhereInput } from './comment-without-company-where.input';
import { Type } from 'class-transformer';
import { CommentWithoutCompanyOrderByWithRelationAndSearchRelevanceInput } from './comment-without-company-order-by-with-relation-and-search-relevance.input';
import { Prisma } from '@prisma/client';
import { CommentWithoutCompanyWhereUniqueInput } from './comment-without-company-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CommentWithoutCompanyScalarFieldEnum } from './comment-without-company-scalar-field.enum';

@ArgsType()
export class FindFirstCommentWithoutCompanyOrThrowArgs {

    @Field(() => CommentWithoutCompanyWhereInput, {nullable:true})
    @Type(() => CommentWithoutCompanyWhereInput)
    where?: CommentWithoutCompanyWhereInput;

    @Field(() => [CommentWithoutCompanyOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<CommentWithoutCompanyOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => CommentWithoutCompanyWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CommentWithoutCompanyWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CommentWithoutCompanyScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CommentWithoutCompanyScalarFieldEnum>;
}
