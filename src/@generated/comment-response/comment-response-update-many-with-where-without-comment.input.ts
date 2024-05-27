import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentResponseScalarWhereInput } from './comment-response-scalar-where.input';
import { Type } from 'class-transformer';
import { CommentResponseUpdateManyMutationInput } from './comment-response-update-many-mutation.input';

@InputType()
export class CommentResponseUpdateManyWithWhereWithoutCommentInput {

    @Field(() => CommentResponseScalarWhereInput, {nullable:false})
    @Type(() => CommentResponseScalarWhereInput)
    where!: CommentResponseScalarWhereInput;

    @Field(() => CommentResponseUpdateManyMutationInput, {nullable:false})
    @Type(() => CommentResponseUpdateManyMutationInput)
    data!: CommentResponseUpdateManyMutationInput;
}
