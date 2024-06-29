import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { CompanyOrderByWithRelationAndSearchRelevanceInput } from '../company/company-order-by-with-relation-and-search-relevance.input';
import { CommentOrderByRelationAggregateInput } from '../comment/comment-order-by-relation-aggregate.input';
import { UserOrderByRelevanceInput } from './user-order-by-relevance.input';
export declare class UserOrderByWithRelationAndSearchRelevanceInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    email?: keyof typeof SortOrder;
    password?: keyof typeof SortOrder;
    firstname?: SortOrderInput;
    lastname?: SortOrderInput;
    role?: keyof typeof SortOrder;
    resetPasswordToken?: SortOrderInput;
    resetPasswordExpires?: SortOrderInput;
    companyId?: SortOrderInput;
    Company?: CompanyOrderByWithRelationAndSearchRelevanceInput;
    Comment?: CommentOrderByRelationAggregateInput;
    _relevance?: UserOrderByRelevanceInput;
}
