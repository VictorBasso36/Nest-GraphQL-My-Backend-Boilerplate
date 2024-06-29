import { CommentResponseCountAggregate } from './comment-response-count-aggregate.output';
import { CommentResponseMinAggregate } from './comment-response-min-aggregate.output';
import { CommentResponseMaxAggregate } from './comment-response-max-aggregate.output';
export declare class CommentResponseGroupBy {
    id: string;
    CommentId: string;
    approved?: boolean;
    createdAt: Date | string;
    updatedAt: Date | string;
    content: string;
    _count?: CommentResponseCountAggregate;
    _min?: CommentResponseMinAggregate;
    _max?: CommentResponseMaxAggregate;
}
