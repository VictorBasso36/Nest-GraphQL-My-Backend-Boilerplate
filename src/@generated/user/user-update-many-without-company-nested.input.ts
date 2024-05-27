import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCompanyInput } from './user-create-without-company.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutCompanyInput } from './user-create-or-connect-without-company.input';
import { UserUpsertWithWhereUniqueWithoutCompanyInput } from './user-upsert-with-where-unique-without-company.input';
import { UserCreateManyCompanyInputEnvelope } from './user-create-many-company-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutCompanyInput } from './user-update-with-where-unique-without-company.input';
import { UserUpdateManyWithWhereWithoutCompanyInput } from './user-update-many-with-where-without-company.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUpdateManyWithoutCompanyNestedInput {

    @Field(() => [UserCreateWithoutCompanyInput], {nullable:true})
    @Type(() => UserCreateWithoutCompanyInput)
    create?: Array<UserCreateWithoutCompanyInput>;

    @Field(() => [UserCreateOrConnectWithoutCompanyInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutCompanyInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutCompanyInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutCompanyInput], {nullable:true})
    @Type(() => UserUpsertWithWhereUniqueWithoutCompanyInput)
    upsert?: Array<UserUpsertWithWhereUniqueWithoutCompanyInput>;

    @Field(() => UserCreateManyCompanyInputEnvelope, {nullable:true})
    @Type(() => UserCreateManyCompanyInputEnvelope)
    createMany?: UserCreateManyCompanyInputEnvelope;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'resetPasswordToken'>>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'resetPasswordToken'>>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'resetPasswordToken'>>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'resetPasswordToken'>>;

    @Field(() => [UserUpdateWithWhereUniqueWithoutCompanyInput], {nullable:true})
    @Type(() => UserUpdateWithWhereUniqueWithoutCompanyInput)
    update?: Array<UserUpdateWithWhereUniqueWithoutCompanyInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutCompanyInput], {nullable:true})
    @Type(() => UserUpdateManyWithWhereWithoutCompanyInput)
    updateMany?: Array<UserUpdateManyWithWhereWithoutCompanyInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    @Type(() => UserScalarWhereInput)
    deleteMany?: Array<UserScalarWhereInput>;
}
