import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { CommentCreateNestedManyWithoutUserInput } from '../comment/comment-create-nested-many-without-user.input';

@InputType()
export class UserCreateWithoutCompanyInput {

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

    @Field(() => CommentCreateNestedManyWithoutUserInput, {nullable:true})
    Comment?: CommentCreateNestedManyWithoutUserInput;
}
