import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompanyWhereInput } from './company-where.input';
import { Type } from 'class-transformer';
import { CompanyUpdateWithoutUserInput } from './company-update-without-user.input';

@InputType()
export class CompanyUpdateToOneWithWhereWithoutUserInput {

    @Field(() => CompanyWhereInput, {nullable:true})
    @Type(() => CompanyWhereInput)
    where?: CompanyWhereInput;

    @Field(() => CompanyUpdateWithoutUserInput, {nullable:false})
    @Type(() => CompanyUpdateWithoutUserInput)
    data!: CompanyUpdateWithoutUserInput;
}
