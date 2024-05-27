import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompanyCreateWithoutUserInput } from './company-create-without-user.input';
import { Type } from 'class-transformer';
import { CompanyCreateOrConnectWithoutUserInput } from './company-create-or-connect-without-user.input';
import { Prisma } from '@prisma/client';
import { CompanyWhereUniqueInput } from './company-where-unique.input';

@InputType()
export class CompanyCreateNestedOneWithoutUserInput {

    @Field(() => CompanyCreateWithoutUserInput, {nullable:true})
    @Type(() => CompanyCreateWithoutUserInput)
    create?: CompanyCreateWithoutUserInput;

    @Field(() => CompanyCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => CompanyCreateOrConnectWithoutUserInput)
    connectOrCreate?: CompanyCreateOrConnectWithoutUserInput;

    @Field(() => CompanyWhereUniqueInput, {nullable:true})
    @Type(() => CompanyWhereUniqueInput)
    connect?: Prisma.AtLeast<CompanyWhereUniqueInput, 'id' | 'cnpj'>;
}
