import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentResponseWhereInput } from './comment-response-where.input';

@InputType()
export class CommentResponseListRelationFilter {

    @Field(() => CommentResponseWhereInput, {nullable:true})
    every?: CommentResponseWhereInput;

    @Field(() => CommentResponseWhereInput, {nullable:true})
    some?: CommentResponseWhereInput;

    @Field(() => CommentResponseWhereInput, {nullable:true})
    none?: CommentResponseWhereInput;
}
