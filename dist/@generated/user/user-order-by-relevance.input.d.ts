import { UserOrderByRelevanceFieldEnum } from './user-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';
export declare class UserOrderByRelevanceInput {
    fields: Array<keyof typeof UserOrderByRelevanceFieldEnum>;
    sort: keyof typeof SortOrder;
    search: string;
}
