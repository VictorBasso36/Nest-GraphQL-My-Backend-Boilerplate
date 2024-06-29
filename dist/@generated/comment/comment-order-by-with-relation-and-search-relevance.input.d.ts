import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { CompanyOrderByWithRelationAndSearchRelevanceInput } from '../company/company-order-by-with-relation-and-search-relevance.input';
import { UserOrderByWithRelationAndSearchRelevanceInput } from '../user/user-order-by-with-relation-and-search-relevance.input';
import { CommentResponseOrderByRelationAggregateInput } from '../comment-response/comment-response-order-by-relation-aggregate.input';
import { CommentOrderByRelevanceInput } from './comment-order-by-relevance.input';
export declare class CommentOrderByWithRelationAndSearchRelevanceInput {
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
    Company?: CompanyOrderByWithRelationAndSearchRelevanceInput;
    User?: UserOrderByWithRelationAndSearchRelevanceInput;
    CommentResponse?: CommentResponseOrderByRelationAggregateInput;
    _relevance?: CommentOrderByRelevanceInput;
}
