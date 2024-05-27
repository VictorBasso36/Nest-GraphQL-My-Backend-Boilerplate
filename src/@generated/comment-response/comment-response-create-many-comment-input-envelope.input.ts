import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentResponseCreateManyCommentInput } from './comment-response-create-many-comment.input';
import { Type } from 'class-transformer';

@InputType()
export class CommentResponseCreateManyCommentInputEnvelope {

    @Field(() => [CommentResponseCreateManyCommentInput], {nullable:false})
    @Type(() => CommentResponseCreateManyCommentInput)
    data!: Array<CommentResponseCreateManyCommentInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
