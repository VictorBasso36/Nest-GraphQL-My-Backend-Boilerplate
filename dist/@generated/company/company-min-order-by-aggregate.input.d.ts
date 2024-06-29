import { SortOrder } from '../prisma/sort-order.enum';
export declare class CompanyMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    cnpj?: keyof typeof SortOrder;
    location?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    urlImage?: keyof typeof SortOrder;
    working?: keyof typeof SortOrder;
    approved?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    ratingCount?: keyof typeof SortOrder;
    rating?: keyof typeof SortOrder;
}
