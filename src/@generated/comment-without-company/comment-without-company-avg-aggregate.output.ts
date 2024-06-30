import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class CommentWithoutCompanyAvgAggregate {

    @Field(() => Float, {nullable:true})
    rating?: number;
}
