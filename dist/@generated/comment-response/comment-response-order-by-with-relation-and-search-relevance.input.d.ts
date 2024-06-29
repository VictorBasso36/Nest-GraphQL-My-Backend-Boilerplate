import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { CommentOrderByWithRelationAndSearchRelevanceInput } from '../comment/comment-order-by-with-relation-and-search-relevance.input';
import { CommentResponseOrderByRelevanceInput } from './comment-response-order-by-relevance.input';
export declare class CommentResponseOrderByWithRelationAndSearchRelevanceInput {
    id?: keyof typeof SortOrder;
    CommentId?: keyof typeof SortOrder;
    approved?: SortOrderInput;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    content?: keyof typeof SortOrder;
    Comment?: CommentOrderByWithRelationAndSearchRelevanceInput;
    _relevance?: CommentResponseOrderByRelevanceInput;
}
