import { CompanyWhereInput } from './company-where.input';
import { CompanyOrderByWithRelationAndSearchRelevanceInput } from './company-order-by-with-relation-and-search-relevance.input';
import { Prisma } from '@prisma/client';
import { CompanyWhereUniqueInput } from './company-where-unique.input';
import { CompanyScalarFieldEnum } from './company-scalar-field.enum';
export declare class FindFirstCompanyOrThrowArgs {
    where?: CompanyWhereInput;
    orderBy?: Array<CompanyOrderByWithRelationAndSearchRelevanceInput>;
    cursor?: Prisma.AtLeast<CompanyWhereUniqueInput, 'id' | 'cnpj'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof CompanyScalarFieldEnum>;
}
