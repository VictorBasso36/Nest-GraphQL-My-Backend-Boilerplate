import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CompanyCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    cnpj!: number;

    @Field(() => Int, {nullable:false})
    location!: number;

    @Field(() => Int, {nullable:false})
    description!: number;

    @Field(() => Int, {nullable:false})
    urlImage!: number;

    @Field(() => Int, {nullable:false})
    working!: number;

    @Field(() => Int, {nullable:false})
    approved!: number;

    @Field(() => Int, {nullable:false})
    removed!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    ratingCount!: number;

    @Field(() => Int, {nullable:false})
    rating!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
