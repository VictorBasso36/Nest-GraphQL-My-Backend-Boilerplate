import { CommentResponseOrderByRelevanceFieldEnum } from './comment-response-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';
export declare class CommentResponseOrderByRelevanceInput {
    fields: Array<keyof typeof CommentResponseOrderByRelevanceFieldEnum>;
    sort: keyof typeof SortOrder;
    search: string;
}
