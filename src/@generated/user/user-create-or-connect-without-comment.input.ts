import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutCommentInput } from './user-create-without-comment.input';

@InputType()
export class UserCreateOrConnectWithoutCommentInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'resetPasswordToken'>;

    @Field(() => UserCreateWithoutCommentInput, {nullable:false})
    @Type(() => UserCreateWithoutCommentInput)
    create!: UserCreateWithoutCommentInput;
}
