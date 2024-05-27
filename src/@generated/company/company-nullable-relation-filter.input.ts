import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompanyWhereInput } from './company-where.input';

@InputType()
export class CompanyNullableRelationFilter {

    @Field(() => CompanyWhereInput, {nullable:true})
    is?: CompanyWhereInput;

    @Field(() => CompanyWhereInput, {nullable:true})
    isNot?: CompanyWhereInput;
}
