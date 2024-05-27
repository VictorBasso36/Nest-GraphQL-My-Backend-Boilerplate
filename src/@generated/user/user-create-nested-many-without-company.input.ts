import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCompanyInput } from './user-create-without-company.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutCompanyInput } from './user-create-or-connect-without-company.input';
import { UserCreateManyCompanyInputEnvelope } from './user-create-many-company-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedManyWithoutCompanyInput {

    @Field(() => [UserCreateWithoutCompanyInput], {nullable:true})
    @Type(() => UserCreateWithoutCompanyInput)
    create?: Array<UserCreateWithoutCompanyInput>;

    @Field(() => [UserCreateOrConnectWithoutCompanyInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutCompanyInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutCompanyInput>;

    @Field(() => UserCreateManyCompanyInputEnvelope, {nullable:true})
    @Type(() => UserCreateManyCompanyInputEnvelope)
    createMany?: UserCreateManyCompanyInputEnvelope;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'resetPasswordToken'>>;
}
