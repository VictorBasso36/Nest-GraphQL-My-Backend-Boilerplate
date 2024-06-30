import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommentWithoutCompanyWhereInput } from './comment-without-company-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyCommentWithoutCompanyArgs {

    @Field(() => CommentWithoutCompanyWhereInput, {nullable:true})
    @Type(() => CommentWithoutCompanyWhereInput)
    where?: CommentWithoutCompanyWhereInput;
}
