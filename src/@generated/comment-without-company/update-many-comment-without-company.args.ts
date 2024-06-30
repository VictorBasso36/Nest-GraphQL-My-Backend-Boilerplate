import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommentWithoutCompanyUpdateManyMutationInput } from './comment-without-company-update-many-mutation.input';
import { Type } from 'class-transformer';
import { CommentWithoutCompanyWhereInput } from './comment-without-company-where.input';

@ArgsType()
export class UpdateManyCommentWithoutCompanyArgs {

    @Field(() => CommentWithoutCompanyUpdateManyMutationInput, {nullable:false})
    @Type(() => CommentWithoutCompanyUpdateManyMutationInput)
    data!: CommentWithoutCompanyUpdateManyMutationInput;

    @Field(() => CommentWithoutCompanyWhereInput, {nullable:true})
    @Type(() => CommentWithoutCompanyWhereInput)
    where?: CommentWithoutCompanyWhereInput;
}
