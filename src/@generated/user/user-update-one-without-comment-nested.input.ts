import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCommentInput } from './user-create-without-comment.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutCommentInput } from './user-create-or-connect-without-comment.input';
import { UserUpsertWithoutCommentInput } from './user-upsert-without-comment.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutCommentInput } from './user-update-to-one-with-where-without-comment.input';

@InputType()
export class UserUpdateOneWithoutCommentNestedInput {

    @Field(() => UserCreateWithoutCommentInput, {nullable:true})
    @Type(() => UserCreateWithoutCommentInput)
    create?: UserCreateWithoutCommentInput;

    @Field(() => UserCreateOrConnectWithoutCommentInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutCommentInput)
    connectOrCreate?: UserCreateOrConnectWithoutCommentInput;

    @Field(() => UserUpsertWithoutCommentInput, {nullable:true})
    @Type(() => UserUpsertWithoutCommentInput)
    upsert?: UserUpsertWithoutCommentInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: UserWhereInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'resetPasswordToken'>;

    @Field(() => UserUpdateToOneWithWhereWithoutCommentInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutCommentInput)
    update?: UserUpdateToOneWithWhereWithoutCommentInput;
}
