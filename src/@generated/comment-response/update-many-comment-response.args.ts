import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommentResponseUpdateManyMutationInput } from './comment-response-update-many-mutation.input';
import { Type } from 'class-transformer';
import { CommentResponseWhereInput } from './comment-response-where.input';

@ArgsType()
export class UpdateManyCommentResponseArgs {

    @Field(() => CommentResponseUpdateManyMutationInput, {nullable:false})
    @Type(() => CommentResponseUpdateManyMutationInput)
    data!: CommentResponseUpdateManyMutationInput;

    @Field(() => CommentResponseWhereInput, {nullable:true})
    @Type(() => CommentResponseWhereInput)
    where?: CommentResponseWhereInput;
}
