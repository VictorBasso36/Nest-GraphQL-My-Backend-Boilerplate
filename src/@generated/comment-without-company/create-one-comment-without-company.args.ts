import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommentWithoutCompanyCreateInput } from './comment-without-company-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneCommentWithoutCompanyArgs {

    @Field(() => CommentWithoutCompanyCreateInput, {nullable:false})
    @Type(() => CommentWithoutCompanyCreateInput)
    data!: CommentWithoutCompanyCreateInput;
}
