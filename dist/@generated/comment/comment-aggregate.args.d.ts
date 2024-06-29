import { CommentWhereInput } from './comment-where.input';
import { CommentOrderByWithRelationAndSearchRelevanceInput } from './comment-order-by-with-relation-and-search-relevance.input';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentCountAggregateInput } from './comment-count-aggregate.input';
import { CommentAvgAggregateInput } from './comment-avg-aggregate.input';
import { CommentSumAggregateInput } from './comment-sum-aggregate.input';
import { CommentMinAggregateInput } from './comment-min-aggregate.input';
import { CommentMaxAggregateInput } from './comment-max-aggregate.input';
export declare class CommentAggregateArgs {
    where?: CommentWhereInput;
    orderBy?: Array<CommentOrderByWithRelationAndSearchRelevanceInput>;
    cursor?: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: CommentCountAggregateInput;
    _avg?: CommentAvgAggregateInput;
    _sum?: CommentSumAggregateInput;
    _min?: CommentMinAggregateInput;
    _max?: CommentMaxAggregateInput;
}
