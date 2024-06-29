import { SortOrder } from '../prisma/sort-order.enum';
export declare class CommentMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    title?: keyof typeof SortOrder;
    serviceType?: keyof typeof SortOrder;
    content?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    rating?: keyof typeof SortOrder;
    approved?: keyof typeof SortOrder;
    removed?: keyof typeof SortOrder;
    companyId?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
}
