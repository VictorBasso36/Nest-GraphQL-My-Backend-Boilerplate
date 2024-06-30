import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CompanyMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    cnpj?: true;

    @Field(() => Boolean, {nullable:true})
    location?: true;

    @Field(() => Boolean, {nullable:true})
    description?: true;

    @Field(() => Boolean, {nullable:true})
    urlImage?: true;

    @Field(() => Boolean, {nullable:true})
    working?: true;

    @Field(() => Boolean, {nullable:true})
    approved?: true;

    @Field(() => Boolean, {nullable:true})
    removed?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    ratingCount?: true;

    @Field(() => Boolean, {nullable:true})
    rating?: true;
}
