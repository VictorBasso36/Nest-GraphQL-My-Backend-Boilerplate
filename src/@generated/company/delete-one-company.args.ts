import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CompanyWhereUniqueInput } from './company-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneCompanyArgs {

    @Field(() => CompanyWhereUniqueInput, {nullable:false})
    @Type(() => CompanyWhereUniqueInput)
    where!: Prisma.AtLeast<CompanyWhereUniqueInput, 'id' | 'cnpj'>;
}
