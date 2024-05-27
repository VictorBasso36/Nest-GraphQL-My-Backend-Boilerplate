import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompanyCreateWithoutUserInput } from './company-create-without-user.input';
import { Type } from 'class-transformer';
import { CompanyCreateOrConnectWithoutUserInput } from './company-create-or-connect-without-user.input';
import { CompanyUpsertWithoutUserInput } from './company-upsert-without-user.input';
import { CompanyWhereInput } from './company-where.input';
import { Prisma } from '@prisma/client';
import { CompanyWhereUniqueInput } from './company-where-unique.input';
import { CompanyUpdateToOneWithWhereWithoutUserInput } from './company-update-to-one-with-where-without-user.input';

@InputType()
export class CompanyUpdateOneWithoutUserNestedInput {

    @Field(() => CompanyCreateWithoutUserInput, {nullable:true})
    @Type(() => CompanyCreateWithoutUserInput)
    create?: CompanyCreateWithoutUserInput;

    @Field(() => CompanyCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => CompanyCreateOrConnectWithoutUserInput)
    connectOrCreate?: CompanyCreateOrConnectWithoutUserInput;

    @Field(() => CompanyUpsertWithoutUserInput, {nullable:true})
    @Type(() => CompanyUpsertWithoutUserInput)
    upsert?: CompanyUpsertWithoutUserInput;

    @Field(() => CompanyWhereInput, {nullable:true})
    @Type(() => CompanyWhereInput)
    disconnect?: CompanyWhereInput;

    @Field(() => CompanyWhereInput, {nullable:true})
    @Type(() => CompanyWhereInput)
    delete?: CompanyWhereInput;

    @Field(() => CompanyWhereUniqueInput, {nullable:true})
    @Type(() => CompanyWhereUniqueInput)
    connect?: Prisma.AtLeast<CompanyWhereUniqueInput, 'id' | 'cnpj'>;

    @Field(() => CompanyUpdateToOneWithWhereWithoutUserInput, {nullable:true})
    @Type(() => CompanyUpdateToOneWithWhereWithoutUserInput)
    update?: CompanyUpdateToOneWithWhereWithoutUserInput;
}
