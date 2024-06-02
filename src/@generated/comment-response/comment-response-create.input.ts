import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateNestedOneWithoutCommentResponseInput } from '../comment/comment-create-nested-one-without-comment-response.input';

@InputType()
export class CommentResponseCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Boolean, {nullable:true})
    approved?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => CommentCreateNestedOneWithoutCommentResponseInput, {nullable:false})
    Comment!: CommentCreateNestedOneWithoutCommentResponseInput;
}
