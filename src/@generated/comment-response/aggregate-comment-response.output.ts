import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CommentResponseCountAggregate } from './comment-response-count-aggregate.output';
import { CommentResponseMinAggregate } from './comment-response-min-aggregate.output';
import { CommentResponseMaxAggregate } from './comment-response-max-aggregate.output';

@ObjectType()
export class AggregateCommentResponse {

    @Field(() => CommentResponseCountAggregate, {nullable:true})
    _count?: CommentResponseCountAggregate;

    @Field(() => CommentResponseMinAggregate, {nullable:true})
    _min?: CommentResponseMinAggregate;

    @Field(() => CommentResponseMaxAggregate, {nullable:true})
    _max?: CommentResponseMaxAggregate;
}
