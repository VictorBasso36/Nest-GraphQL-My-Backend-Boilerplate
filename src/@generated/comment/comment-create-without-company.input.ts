import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CommentResponseCreateNestedManyWithoutCommentInput } from '../comment-response/comment-response-create-nested-many-without-comment.input';

@InputType()
export class CommentCreateWithoutCompanyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Int, {nullable:true})
    rating?: number;

    @Field(() => Boolean, {nullable:true})
    approved?: boolean;

    @Field(() => CommentResponseCreateNestedManyWithoutCommentInput, {nullable:true})
    CommentResponse?: CommentResponseCreateNestedManyWithoutCommentInput;
}
