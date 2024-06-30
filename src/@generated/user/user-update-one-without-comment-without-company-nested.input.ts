import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCommentWithoutCompanyInput } from './user-create-without-comment-without-company.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutCommentWithoutCompanyInput } from './user-create-or-connect-without-comment-without-company.input';
import { UserUpsertWithoutCommentWithoutCompanyInput } from './user-upsert-without-comment-without-company.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutCommentWithoutCompanyInput } from './user-update-to-one-with-where-without-comment-without-company.input';

@InputType()
export class UserUpdateOneWithoutCommentWithoutCompanyNestedInput {

    @Field(() => UserCreateWithoutCommentWithoutCompanyInput, {nullable:true})
    @Type(() => UserCreateWithoutCommentWithoutCompanyInput)
    create?: UserCreateWithoutCommentWithoutCompanyInput;

    @Field(() => UserCreateOrConnectWithoutCommentWithoutCompanyInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutCommentWithoutCompanyInput)
    connectOrCreate?: UserCreateOrConnectWithoutCommentWithoutCompanyInput;

    @Field(() => UserUpsertWithoutCommentWithoutCompanyInput, {nullable:true})
    @Type(() => UserUpsertWithoutCommentWithoutCompanyInput)
    upsert?: UserUpsertWithoutCommentWithoutCompanyInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: UserWhereInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'resetPasswordToken'>;

    @Field(() => UserUpdateToOneWithWhereWithoutCommentWithoutCompanyInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutCommentWithoutCompanyInput)
    update?: UserUpdateToOneWithWhereWithoutCommentWithoutCompanyInput;
}
