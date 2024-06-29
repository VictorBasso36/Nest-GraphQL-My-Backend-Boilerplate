import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { CommentResponseCountOrderByAggregateInput } from './comment-response-count-order-by-aggregate.input';
import { CommentResponseMaxOrderByAggregateInput } from './comment-response-max-order-by-aggregate.input';
import { CommentResponseMinOrderByAggregateInput } from './comment-response-min-order-by-aggregate.input';
export declare class CommentResponseOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    CommentId?: keyof typeof SortOrder;
    approved?: SortOrderInput;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    content?: keyof typeof SortOrder;
    _count?: CommentResponseCountOrderByAggregateInput;
    _max?: CommentResponseMaxOrderByAggregateInput;
    _min?: CommentResponseMinOrderByAggregateInput;
}
