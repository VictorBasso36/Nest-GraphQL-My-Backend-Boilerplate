import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { CommentWithoutCompanyUncheckedCreateNestedManyWithoutUserInput } from '../comment-without-company/comment-without-company-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutCommentInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:true})
    firstname?: string;

    @Field(() => String, {nullable:true})
    lastname?: string;

    @Field(() => Role, {nullable:false})
    role!: keyof typeof Role;

    @Field(() => String, {nullable:true})
    resetPasswordToken?: string;

    @Field(() => Date, {nullable:true})
    resetPasswordExpires?: Date | string;

    @Field(() => String, {nullable:true})
    companyId?: string;

    @Field(() => CommentWithoutCompanyUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    CommentWithoutCompany?: CommentWithoutCompanyUncheckedCreateNestedManyWithoutUserInput;
}
