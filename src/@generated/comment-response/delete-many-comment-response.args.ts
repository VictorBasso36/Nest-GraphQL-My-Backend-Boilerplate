import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommentResponseWhereInput } from './comment-response-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyCommentResponseArgs {

    @Field(() => CommentResponseWhereInput, {nullable:true})
    @Type(() => CommentResponseWhereInput)
    where?: CommentResponseWhereInput;
}
