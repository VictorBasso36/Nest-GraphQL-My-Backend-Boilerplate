import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCommentWithoutCompanyInput } from './user-create-without-comment-without-company.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutCommentWithoutCompanyInput } from './user-create-or-connect-without-comment-without-company.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutCommentWithoutCompanyInput {

    @Field(() => UserCreateWithoutCommentWithoutCompanyInput, {nullable:true})
    @Type(() => UserCreateWithoutCommentWithoutCompanyInput)
    create?: UserCreateWithoutCommentWithoutCompanyInput;

    @Field(() => UserCreateOrConnectWithoutCommentWithoutCompanyInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutCommentWithoutCompanyInput)
    connectOrCreate?: UserCreateOrConnectWithoutCommentWithoutCompanyInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'resetPasswordToken'>;
}
