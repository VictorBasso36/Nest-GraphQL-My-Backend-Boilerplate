import { SortOrder } from '../prisma/sort-order.enum';
export declare class CommentResponseCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    CommentId?: keyof typeof SortOrder;
    approved?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    content?: keyof typeof SortOrder;
}
