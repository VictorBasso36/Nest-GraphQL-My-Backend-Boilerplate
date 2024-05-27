import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentWhereInput } from './comment-where.input';
import { Type } from 'class-transformer';
import { CommentUpdateWithoutCommentResponseInput } from './comment-update-without-comment-response.input';

@InputType()
export class CommentUpdateToOneWithWhereWithoutCommentResponseInput {

    @Field(() => CommentWhereInput, {nullable:true})
    @Type(() => CommentWhereInput)
    where?: CommentWhereInput;

    @Field(() => CommentUpdateWithoutCommentResponseInput, {nullable:false})
    @Type(() => CommentUpdateWithoutCommentResponseInput)
    data!: CommentUpdateWithoutCommentResponseInput;
}
