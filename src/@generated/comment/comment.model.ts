import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Company } from '../company/company.model';
import { CommentResponse } from '../comment-response/comment-response.model';
import { CommentCount } from './comment-count.output';

@ObjectType()
export class Comment {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Float, {nullable:true})
    rating!: number | null;

    @Field(() => Boolean, {nullable:true,defaultValue:false})
    approved!: boolean | null;

    @Field(() => String, {nullable:false})
    companyId!: string;

    @Field(() => Company, {nullable:false})
    Company?: Company;

    @Field(() => [CommentResponse], {nullable:true})
    CommentResponse?: Array<CommentResponse>;

    @Field(() => CommentCount, {nullable:false})
    _count?: CommentCount;
}
