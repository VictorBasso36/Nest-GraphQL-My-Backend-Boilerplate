import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserOrderByRelationAggregateInput } from '../user/user-order-by-relation-aggregate.input';
import { CommentOrderByRelationAggregateInput } from '../comment/comment-order-by-relation-aggregate.input';
import { CompanyOrderByRelevanceInput } from './company-order-by-relevance.input';
export declare class CompanyOrderByWithRelationAndSearchRelevanceInput {
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
    User?: UserOrderByRelationAggregateInput;
    Comment?: CommentOrderByRelationAggregateInput;
    _relevance?: CompanyOrderByRelevanceInput;
}
