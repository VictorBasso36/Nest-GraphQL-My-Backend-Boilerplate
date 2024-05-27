import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CompanyCount {

    @Field(() => Int, {nullable:false})
    User?: number;

    @Field(() => Int, {nullable:false})
    Comment?: number;
}
