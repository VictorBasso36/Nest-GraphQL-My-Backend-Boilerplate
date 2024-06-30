import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class CompanyMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    cnpj?: string;

    @Field(() => String, {nullable:true})
    location?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    urlImage?: string;

    @Field(() => String, {nullable:true})
    working?: string;

    @Field(() => Boolean, {nullable:true})
    approved?: boolean;

    @Field(() => Boolean, {nullable:true})
    removed?: boolean;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Int, {nullable:true})
    ratingCount?: number;

    @Field(() => Float, {nullable:true})
    rating?: number;
}
