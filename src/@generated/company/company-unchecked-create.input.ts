import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUncheckedCreateNestedManyWithoutCompanyInput } from '../user/user-unchecked-create-nested-many-without-company.input';
import { CommentUncheckedCreateNestedManyWithoutCompanyInput } from '../comment/comment-unchecked-create-nested-many-without-company.input';

@InputType()
export class CompanyUncheckedCreateInput {

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

    @Field(() => UserUncheckedCreateNestedManyWithoutCompanyInput, {nullable:true})
    User?: UserUncheckedCreateNestedManyWithoutCompanyInput;

    @Field(() => CommentUncheckedCreateNestedManyWithoutCompanyInput, {nullable:true})
    Comment?: CommentUncheckedCreateNestedManyWithoutCompanyInput;
}
