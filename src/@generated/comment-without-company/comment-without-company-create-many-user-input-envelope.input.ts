import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentWithoutCompanyCreateManyUserInput } from './comment-without-company-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class CommentWithoutCompanyCreateManyUserInputEnvelope {

    @Field(() => [CommentWithoutCompanyCreateManyUserInput], {nullable:false})
    @Type(() => CommentWithoutCompanyCreateManyUserInput)
    data!: Array<CommentWithoutCompanyCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
