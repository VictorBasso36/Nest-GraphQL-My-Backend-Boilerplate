import { CommentOrderByRelevanceFieldEnum } from './comment-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';
export declare class CommentOrderByRelevanceInput {
    fields: Array<keyof typeof CommentOrderByRelevanceFieldEnum>;
    sort: keyof typeof SortOrder;
    search: string;
}
