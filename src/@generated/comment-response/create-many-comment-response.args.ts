import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommentResponseCreateManyInput } from './comment-response-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyCommentResponseArgs {

    @Field(() => [CommentResponseCreateManyInput], {nullable:false})
    @Type(() => CommentResponseCreateManyInput)
    data!: Array<CommentResponseCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
