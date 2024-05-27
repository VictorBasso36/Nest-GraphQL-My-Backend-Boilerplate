import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommentResponseCreateInput } from './comment-response-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneCommentResponseArgs {

    @Field(() => CommentResponseCreateInput, {nullable:false})
    @Type(() => CommentResponseCreateInput)
    data!: CommentResponseCreateInput;
}
