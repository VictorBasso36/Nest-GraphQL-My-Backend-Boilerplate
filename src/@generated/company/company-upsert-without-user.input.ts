import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompanyUpdateWithoutUserInput } from './company-update-without-user.input';
import { Type } from 'class-transformer';
import { CompanyCreateWithoutUserInput } from './company-create-without-user.input';
import { CompanyWhereInput } from './company-where.input';

@InputType()
export class CompanyUpsertWithoutUserInput {

    @Field(() => CompanyUpdateWithoutUserInput, {nullable:false})
    @Type(() => CompanyUpdateWithoutUserInput)
    update!: CompanyUpdateWithoutUserInput;

    @Field(() => CompanyCreateWithoutUserInput, {nullable:false})
    @Type(() => CompanyCreateWithoutUserInput)
    create!: CompanyCreateWithoutUserInput;

    @Field(() => CompanyWhereInput, {nullable:true})
    @Type(() => CompanyWhereInput)
    where?: CompanyWhereInput;
}
