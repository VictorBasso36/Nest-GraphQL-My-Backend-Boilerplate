import { CommentResponseWhereInput } from './comment-response-where.input';
import { CommentResponseOrderByWithRelationAndSearchRelevanceInput } from './comment-response-order-by-with-relation-and-search-relevance.input';
import { Prisma } from '@prisma/client';
import { CommentResponseWhereUniqueInput } from './comment-response-where-unique.input';
import { CommentResponseCountAggregateInput } from './comment-response-count-aggregate.input';
import { CommentResponseMinAggregateInput } from './comment-response-min-aggregate.input';
import { CommentResponseMaxAggregateInput } from './comment-response-max-aggregate.input';
export declare class CommentResponseAggregateArgs {
    where?: CommentResponseWhereInput;
    orderBy?: Array<CommentResponseOrderByWithRelationAndSearchRelevanceInput>;
    cursor?: Prisma.AtLeast<CommentResponseWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: CommentResponseCountAggregateInput;
    _min?: CommentResponseMinAggregateInput;
    _max?: CommentResponseMaxAggregateInput;
}
