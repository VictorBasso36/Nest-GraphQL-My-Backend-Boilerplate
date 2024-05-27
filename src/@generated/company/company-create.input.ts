import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedManyWithoutCompanyInput } from '../user/user-create-nested-many-without-company.input';
import { CommentCreateNestedManyWithoutCompanyInput } from '../comment/comment-create-nested-many-without-company.input';

@InputType()
export class CompanyCreateInput {

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

    @Field(() => UserCreateNestedManyWithoutCompanyInput, {nullable:true})
    User?: UserCreateNestedManyWithoutCompanyInput;

    @Field(() => CommentCreateNestedManyWithoutCompanyInput, {nullable:true})
    Comment?: CommentCreateNestedManyWithoutCompanyInput;
}
