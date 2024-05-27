import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompanyWhereInput } from './company-where.input';
import { Type } from 'class-transformer';
import { CompanyUpdateWithoutCommentInput } from './company-update-without-comment.input';

@InputType()
export class CompanyUpdateToOneWithWhereWithoutCommentInput {

    @Field(() => CompanyWhereInput, {nullable:true})
    @Type(() => CompanyWhereInput)
    where?: CompanyWhereInput;

    @Field(() => CompanyUpdateWithoutCommentInput, {nullable:false})
    @Type(() => CompanyUpdateWithoutCommentInput)
    data!: CompanyUpdateWithoutCommentInput;
}
