import { CommentResponseWhereInput } from './comment-response-where.input';
import { CommentResponseOrderByWithAggregationInput } from './comment-response-order-by-with-aggregation.input';
import { CommentResponseScalarFieldEnum } from './comment-response-scalar-field.enum';
import { CommentResponseScalarWhereWithAggregatesInput } from './comment-response-scalar-where-with-aggregates.input';
import { CommentResponseCountAggregateInput } from './comment-response-count-aggregate.input';
import { CommentResponseMinAggregateInput } from './comment-response-min-aggregate.input';
import { CommentResponseMaxAggregateInput } from './comment-response-max-aggregate.input';
export declare class CommentResponseGroupByArgs {
    where?: CommentResponseWhereInput;
    orderBy?: Array<CommentResponseOrderByWithAggregationInput>;
    by: Array<keyof typeof CommentResponseScalarFieldEnum>;
    having?: CommentResponseScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CommentResponseCountAggregateInput;
    _min?: CommentResponseMinAggregateInput;
    _max?: CommentResponseMaxAggregateInput;
}
