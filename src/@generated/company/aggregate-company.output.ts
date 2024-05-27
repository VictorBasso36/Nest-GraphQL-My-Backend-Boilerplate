import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CompanyCountAggregate } from './company-count-aggregate.output';
import { CompanyMinAggregate } from './company-min-aggregate.output';
import { CompanyMaxAggregate } from './company-max-aggregate.output';

@ObjectType()
export class AggregateCompany {

    @Field(() => CompanyCountAggregate, {nullable:true})
    _count?: CompanyCountAggregate;

    @Field(() => CompanyMinAggregate, {nullable:true})
    _min?: CompanyMinAggregate;

    @Field(() => CompanyMaxAggregate, {nullable:true})
    _max?: CompanyMaxAggregate;
}
