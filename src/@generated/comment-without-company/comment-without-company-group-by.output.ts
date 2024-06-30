import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { CommentWithoutCompanyCountAggregate } from './comment-without-company-count-aggregate.output';
import { CommentWithoutCompanyAvgAggregate } from './comment-without-company-avg-aggregate.output';
import { CommentWithoutCompanySumAggregate } from './comment-without-company-sum-aggregate.output';
import { CommentWithoutCompanyMinAggregate } from './comment-without-company-min-aggregate.output';
import { CommentWithoutCompanyMaxAggregate } from './comment-without-company-max-aggregate.output';

@ObjectType()
export class CommentWithoutCompanyGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    cnpj!: string;

    @Field(() => Float, {nullable:true})
    rating?: number;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    serviceType?: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => CommentWithoutCompanyCountAggregate, {nullable:true})
    _count?: CommentWithoutCompanyCountAggregate;

    @Field(() => CommentWithoutCompanyAvgAggregate, {nullable:true})
    _avg?: CommentWithoutCompanyAvgAggregate;

    @Field(() => CommentWithoutCompanySumAggregate, {nullable:true})
    _sum?: CommentWithoutCompanySumAggregate;

    @Field(() => CommentWithoutCompanyMinAggregate, {nullable:true})
    _min?: CommentWithoutCompanyMinAggregate;

    @Field(() => CommentWithoutCompanyMaxAggregate, {nullable:true})
    _max?: CommentWithoutCompanyMaxAggregate;
}
