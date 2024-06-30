import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentWithoutCompanyWhereInput } from './comment-without-company-where.input';

@InputType()
export class CommentWithoutCompanyListRelationFilter {

    @Field(() => CommentWithoutCompanyWhereInput, {nullable:true})
    every?: CommentWithoutCompanyWhereInput;

    @Field(() => CommentWithoutCompanyWhereInput, {nullable:true})
    some?: CommentWithoutCompanyWhereInput;

    @Field(() => CommentWithoutCompanyWhereInput, {nullable:true})
    none?: CommentWithoutCompanyWhereInput;
}
