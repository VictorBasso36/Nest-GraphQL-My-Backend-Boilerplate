import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { CompanyCountOrderByAggregateInput } from './company-count-order-by-aggregate.input';
import { CompanyAvgOrderByAggregateInput } from './company-avg-order-by-aggregate.input';
import { CompanyMaxOrderByAggregateInput } from './company-max-order-by-aggregate.input';
import { CompanyMinOrderByAggregateInput } from './company-min-order-by-aggregate.input';
import { CompanySumOrderByAggregateInput } from './company-sum-order-by-aggregate.input';
export declare class CompanyOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    cnpj?: keyof typeof SortOrder;
    location?: keyof typeof SortOrder;
    description?: SortOrderInput;
    urlImage?: SortOrderInput;
    working?: SortOrderInput;
    approved?: SortOrderInput;
    name?: keyof typeof SortOrder;
    ratingCount?: SortOrderInput;
    rating?: SortOrderInput;
    _count?: CompanyCountOrderByAggregateInput;
    _avg?: CompanyAvgOrderByAggregateInput;
    _max?: CompanyMaxOrderByAggregateInput;
    _min?: CompanyMinOrderByAggregateInput;
    _sum?: CompanySumOrderByAggregateInput;
}
