import { CommentCountAggregate } from './comment-count-aggregate.output';
import { CommentAvgAggregate } from './comment-avg-aggregate.output';
import { CommentSumAggregate } from './comment-sum-aggregate.output';
import { CommentMinAggregate } from './comment-min-aggregate.output';
import { CommentMaxAggregate } from './comment-max-aggregate.output';
export declare class AggregateComment {
    _count?: CommentCountAggregate;
    _avg?: CommentAvgAggregate;
    _sum?: CommentSumAggregate;
    _min?: CommentMinAggregate;
    _max?: CommentMaxAggregate;
}
