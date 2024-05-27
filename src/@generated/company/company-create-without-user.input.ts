import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateNestedManyWithoutCompanyInput } from '../comment/comment-create-nested-many-without-company.input';

@InputType()
export class CompanyCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    cnpj!: string;

    @Field(() => String, {nullable:false})
    location!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    rating!: string;

    @Field(() => CommentCreateNestedManyWithoutCompanyInput, {nullable:true})
    Comment?: CommentCreateNestedManyWithoutCompanyInput;
}
