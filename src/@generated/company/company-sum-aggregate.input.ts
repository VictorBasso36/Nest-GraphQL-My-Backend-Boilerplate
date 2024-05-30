import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CompanySumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    ratingCount?: true;

    @Field(() => Boolean, {nullable:true})
    rating?: true;
}
