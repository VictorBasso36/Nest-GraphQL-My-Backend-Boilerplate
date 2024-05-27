import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentUpdateWithoutCommentResponseInput } from './comment-update-without-comment-response.input';
import { Type } from 'class-transformer';
import { CommentCreateWithoutCommentResponseInput } from './comment-create-without-comment-response.input';
import { CommentWhereInput } from './comment-where.input';

@InputType()
export class CommentUpsertWithoutCommentResponseInput {

    @Field(() => CommentUpdateWithoutCommentResponseInput, {nullable:false})
    @Type(() => CommentUpdateWithoutCommentResponseInput)
    update!: CommentUpdateWithoutCommentResponseInput;

    @Field(() => CommentCreateWithoutCommentResponseInput, {nullable:false})
    @Type(() => CommentCreateWithoutCommentResponseInput)
    create!: CommentCreateWithoutCommentResponseInput;

    @Field(() => CommentWhereInput, {nullable:true})
    @Type(() => CommentWhereInput)
    where?: CommentWhereInput;
}
