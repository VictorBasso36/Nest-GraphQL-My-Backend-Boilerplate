import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommentWithoutCompanyCreateManyInput } from './comment-without-company-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyCommentWithoutCompanyArgs {

    @Field(() => [CommentWithoutCompanyCreateManyInput], {nullable:false})
    @Type(() => CommentWithoutCompanyCreateManyInput)
    data!: Array<CommentWithoutCompanyCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
