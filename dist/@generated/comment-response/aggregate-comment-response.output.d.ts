import { CommentResponseCountAggregate } from './comment-response-count-aggregate.output';
import { CommentResponseMinAggregate } from './comment-response-min-aggregate.output';
import { CommentResponseMaxAggregate } from './comment-response-max-aggregate.output';
export declare class AggregateCommentResponse {
    _count?: CommentResponseCountAggregate;
    _min?: CommentResponseMinAggregate;
    _max?: CommentResponseMaxAggregate;
}
