import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

@ObjectType()
export class CountersModels {

    @Field(() => Number, {nullable:false})
    ratingCount: number;

    @Field(() => Number, {nullable:false})
    resolvedRatingCount: number;

    @Field(() => Number, {nullable:false})
    notresolvedRatingCount: number;

    @Field(() => Number, {nullable:false})
    ratingNoResponse: number;
    
}
