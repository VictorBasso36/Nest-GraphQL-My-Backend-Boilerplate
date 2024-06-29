import { CommentWhereInput } from './comment-where.input';
import { CommentOrderByWithAggregationInput } from './comment-order-by-with-aggregation.input';
import { CommentScalarFieldEnum } from './comment-scalar-field.enum';
import { CommentScalarWhereWithAggregatesInput } from './comment-scalar-where-with-aggregates.input';
import { CommentCountAggregateInput } from './comment-count-aggregate.input';
import { CommentAvgAggregateInput } from './comment-avg-aggregate.input';
import { CommentSumAggregateInput } from './comment-sum-aggregate.input';
import { CommentMinAggregateInput } from './comment-min-aggregate.input';
import { CommentMaxAggregateInput } from './comment-max-aggregate.input';
export declare class CommentGroupByArgs {
    where?: CommentWhereInput;
    orderBy?: Array<CommentOrderByWithAggregationInput>;
    by: Array<keyof typeof CommentScalarFieldEnum>;
    having?: CommentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CommentCountAggregateInput;
    _avg?: CommentAvgAggregateInput;
    _sum?: CommentSumAggregateInput;
    _min?: CommentMinAggregateInput;
    _max?: CommentMaxAggregateInput;
}
