import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CompanyWhereUniqueInput } from './company-where-unique.input';
import { Type } from 'class-transformer';
import { CompanyCreateWithoutUserInput } from './company-create-without-user.input';

@InputType()
export class CompanyCreateOrConnectWithoutUserInput {

    @Field(() => CompanyWhereUniqueInput, {nullable:false})
    @Type(() => CompanyWhereUniqueInput)
    where!: Prisma.AtLeast<CompanyWhereUniqueInput, 'id' | 'cnpj' | 'name'>;

    @Field(() => CompanyCreateWithoutUserInput, {nullable:false})
    @Type(() => CompanyCreateWithoutUserInput)
    create!: CompanyCreateWithoutUserInput;
}
