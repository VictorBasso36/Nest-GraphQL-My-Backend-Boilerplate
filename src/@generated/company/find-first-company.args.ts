import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CompanyWhereInput } from './company-where.input';
import { Type } from 'class-transformer';
import { CompanyOrderByWithRelationAndSearchRelevanceInput } from './company-order-by-with-relation-and-search-relevance.input';
import { Prisma } from '@prisma/client';
import { CompanyWhereUniqueInput } from './company-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CompanyScalarFieldEnum } from './company-scalar-field.enum';

@ArgsType()
export class FindFirstCompanyArgs {

    @Field(() => CompanyWhereInput, {nullable:true})
    @Type(() => CompanyWhereInput)
    where?: CompanyWhereInput;

    @Field(() => [CompanyOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<CompanyOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => CompanyWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CompanyWhereUniqueInput, 'id' | 'cnpj'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CompanyScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CompanyScalarFieldEnum>;
}
