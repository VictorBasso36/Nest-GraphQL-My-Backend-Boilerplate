import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutCompanyInput } from './user-update-without-company.input';
import { UserCreateWithoutCompanyInput } from './user-create-without-company.input';

@InputType()
export class UserUpsertWithWhereUniqueWithoutCompanyInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'resetPasswordToken'>;

    @Field(() => UserUpdateWithoutCompanyInput, {nullable:false})
    @Type(() => UserUpdateWithoutCompanyInput)
    update!: UserUpdateWithoutCompanyInput;

    @Field(() => UserCreateWithoutCompanyInput, {nullable:false})
    @Type(() => UserCreateWithoutCompanyInput)
    create!: UserCreateWithoutCompanyInput;
}
