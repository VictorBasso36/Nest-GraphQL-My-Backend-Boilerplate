import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { CommentCountOrderByAggregateInput } from './comment-count-order-by-aggregate.input';
import { CommentAvgOrderByAggregateInput } from './comment-avg-order-by-aggregate.input';
import { CommentMaxOrderByAggregateInput } from './comment-max-order-by-aggregate.input';
import { CommentMinOrderByAggregateInput } from './comment-min-order-by-aggregate.input';
import { CommentSumOrderByAggregateInput } from './comment-sum-order-by-aggregate.input';
export declare class CommentOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    title?: SortOrderInput;
    serviceType?: SortOrderInput;
    content?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    rating?: SortOrderInput;
    approved?: SortOrderInput;
    removed?: SortOrderInput;
    companyId?: SortOrderInput;
    userId?: SortOrderInput;
    _count?: CommentCountOrderByAggregateInput;
    _avg?: CommentAvgOrderByAggregateInput;
    _max?: CommentMaxOrderByAggregateInput;
    _min?: CommentMinOrderByAggregateInput;
    _sum?: CommentSumOrderByAggregateInput;
}
