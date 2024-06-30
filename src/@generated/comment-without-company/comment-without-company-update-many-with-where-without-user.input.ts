import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentWithoutCompanyScalarWhereInput } from './comment-without-company-scalar-where.input';
import { Type } from 'class-transformer';
import { CommentWithoutCompanyUpdateManyMutationInput } from './comment-without-company-update-many-mutation.input';

@InputType()
export class CommentWithoutCompanyUpdateManyWithWhereWithoutUserInput {

    @Field(() => CommentWithoutCompanyScalarWhereInput, {nullable:false})
    @Type(() => CommentWithoutCompanyScalarWhereInput)
    where!: CommentWithoutCompanyScalarWhereInput;

    @Field(() => CommentWithoutCompanyUpdateManyMutationInput, {nullable:false})
    @Type(() => CommentWithoutCompanyUpdateManyMutationInput)
    data!: CommentWithoutCompanyUpdateManyMutationInput;
}
