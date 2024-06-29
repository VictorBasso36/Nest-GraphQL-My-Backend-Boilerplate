import { CompanyWhereInput } from './company-where.input';
import { CompanyOrderByWithRelationAndSearchRelevanceInput } from './company-order-by-with-relation-and-search-relevance.input';
import { Prisma } from '@prisma/client';
import { CompanyWhereUniqueInput } from './company-where-unique.input';
import { CompanyCountAggregateInput } from './company-count-aggregate.input';
import { CompanyAvgAggregateInput } from './company-avg-aggregate.input';
import { CompanySumAggregateInput } from './company-sum-aggregate.input';
import { CompanyMinAggregateInput } from './company-min-aggregate.input';
import { CompanyMaxAggregateInput } from './company-max-aggregate.input';
export declare class CompanyAggregateArgs {
    where?: CompanyWhereInput;
    orderBy?: Array<CompanyOrderByWithRelationAndSearchRelevanceInput>;
    cursor?: Prisma.AtLeast<CompanyWhereUniqueInput, 'id' | 'cnpj'>;
    take?: number;
    skip?: number;
    _count?: CompanyCountAggregateInput;
    _avg?: CompanyAvgAggregateInput;
    _sum?: CompanySumAggregateInput;
    _min?: CompanyMinAggregateInput;
    _max?: CompanyMaxAggregateInput;
}
