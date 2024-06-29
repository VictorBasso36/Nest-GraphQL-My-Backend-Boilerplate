import { CompanyOrderByRelevanceFieldEnum } from './company-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';
export declare class CompanyOrderByRelevanceInput {
    fields: Array<keyof typeof CompanyOrderByRelevanceFieldEnum>;
    sort: keyof typeof SortOrder;
    search: string;
}
