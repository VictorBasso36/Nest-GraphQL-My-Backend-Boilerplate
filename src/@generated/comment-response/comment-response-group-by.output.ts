import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CommentResponseCountAggregate } from './comment-response-count-aggregate.output';
import { CommentResponseMinAggregate } from './comment-response-min-aggregate.output';
import { CommentResponseMaxAggregate } from './comment-response-max-aggregate.output';

@ObjectType()
export class CommentResponseGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    CommentId!: string;

    @Field(() => Boolean, {nullable:true})
    approved?: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => CommentResponseCountAggregate, {nullable:true})
    _count?: CommentResponseCountAggregate;

    @Field(() => CommentResponseMinAggregate, {nullable:true})
    _min?: CommentResponseMinAggregate;

    @Field(() => CommentResponseMaxAggregate, {nullable:true})
    _max?: CommentResponseMaxAggregate;
}
