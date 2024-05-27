import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CompanyCountAggregate } from './company-count-aggregate.output';
import { CompanyMinAggregate } from './company-min-aggregate.output';
import { CompanyMaxAggregate } from './company-max-aggregate.output';

@ObjectType()
export class CompanyGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:false})
    cnpj!: string;

    @Field(() => String, {nullable:false})
    location!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    rating!: string;

    @Field(() => CompanyCountAggregate, {nullable:true})
    _count?: CompanyCountAggregate;

    @Field(() => CompanyMinAggregate, {nullable:true})
    _min?: CompanyMinAggregate;

    @Field(() => CompanyMaxAggregate, {nullable:true})
    _max?: CompanyMaxAggregate;
}
