import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommentWithoutCompanyWhereInput } from './comment-without-company-where.input';
import { Type } from 'class-transformer';
import { CommentWithoutCompanyOrderByWithAggregationInput } from './comment-without-company-order-by-with-aggregation.input';
import { CommentWithoutCompanyScalarFieldEnum } from './comment-without-company-scalar-field.enum';
import { CommentWithoutCompanyScalarWhereWithAggregatesInput } from './comment-without-company-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CommentWithoutCompanyCountAggregateInput } from './comment-without-company-count-aggregate.input';
import { CommentWithoutCompanyAvgAggregateInput } from './comment-without-company-avg-aggregate.input';
import { CommentWithoutCompanySumAggregateInput } from './comment-without-company-sum-aggregate.input';
import { CommentWithoutCompanyMinAggregateInput } from './comment-without-company-min-aggregate.input';
import { CommentWithoutCompanyMaxAggregateInput } from './comment-without-company-max-aggregate.input';

@ArgsType()
export class CommentWithoutCompanyGroupByArgs {

    @Field(() => CommentWithoutCompanyWhereInput, {nullable:true})
    @Type(() => CommentWithoutCompanyWhereInput)
    where?: CommentWithoutCompanyWhereInput;

    @Field(() => [CommentWithoutCompanyOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CommentWithoutCompanyOrderByWithAggregationInput>;

    @Field(() => [CommentWithoutCompanyScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CommentWithoutCompanyScalarFieldEnum>;

    @Field(() => CommentWithoutCompanyScalarWhereWithAggregatesInput, {nullable:true})
    having?: CommentWithoutCompanyScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CommentWithoutCompanyCountAggregateInput, {nullable:true})
    _count?: CommentWithoutCompanyCountAggregateInput;

    @Field(() => CommentWithoutCompanyAvgAggregateInput, {nullable:true})
    _avg?: CommentWithoutCompanyAvgAggregateInput;

    @Field(() => CommentWithoutCompanySumAggregateInput, {nullable:true})
    _sum?: CommentWithoutCompanySumAggregateInput;

    @Field(() => CommentWithoutCompanyMinAggregateInput, {nullable:true})
    _min?: CommentWithoutCompanyMinAggregateInput;

    @Field(() => CommentWithoutCompanyMaxAggregateInput, {nullable:true})
    _max?: CommentWithoutCompanyMaxAggregateInput;
}
