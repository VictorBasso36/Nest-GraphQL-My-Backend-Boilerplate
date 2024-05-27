import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompanyUpdateWithoutCommentInput } from './company-update-without-comment.input';
import { Type } from 'class-transformer';
import { CompanyCreateWithoutCommentInput } from './company-create-without-comment.input';
import { CompanyWhereInput } from './company-where.input';

@InputType()
export class CompanyUpsertWithoutCommentInput {

    @Field(() => CompanyUpdateWithoutCommentInput, {nullable:false})
    @Type(() => CompanyUpdateWithoutCommentInput)
    update!: CompanyUpdateWithoutCommentInput;

    @Field(() => CompanyCreateWithoutCommentInput, {nullable:false})
    @Type(() => CompanyCreateWithoutCommentInput)
    create!: CompanyCreateWithoutCommentInput;

    @Field(() => CompanyWhereInput, {nullable:true})
    @Type(() => CompanyWhereInput)
    where?: CompanyWhereInput;
}
