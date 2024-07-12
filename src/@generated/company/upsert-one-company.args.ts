import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CompanyWhereUniqueInput } from './company-where-unique.input';
import { Type } from 'class-transformer';
import { CompanyCreateInput } from './company-create.input';
import { CompanyUpdateInput } from './company-update.input';

@ArgsType()
export class UpsertOneCompanyArgs {

    @Field(() => CompanyWhereUniqueInput, {nullable:false})
    @Type(() => CompanyWhereUniqueInput)
    where!: Prisma.AtLeast<CompanyWhereUniqueInput, 'id' | 'cnpj' | 'name'>;

    @Field(() => CompanyCreateInput, {nullable:false})
    @Type(() => CompanyCreateInput)
    create!: CompanyCreateInput;

    @Field(() => CompanyUpdateInput, {nullable:false})
    @Type(() => CompanyUpdateInput)
    update!: CompanyUpdateInput;
}
