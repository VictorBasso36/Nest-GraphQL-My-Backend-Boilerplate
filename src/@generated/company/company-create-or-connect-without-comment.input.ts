import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CompanyWhereUniqueInput } from './company-where-unique.input';
import { Type } from 'class-transformer';
import { CompanyCreateWithoutCommentInput } from './company-create-without-comment.input';

@InputType()
export class CompanyCreateOrConnectWithoutCommentInput {

    @Field(() => CompanyWhereUniqueInput, {nullable:false})
    @Type(() => CompanyWhereUniqueInput)
    where!: Prisma.AtLeast<CompanyWhereUniqueInput, 'id' | 'cnpj' | 'name'>;

    @Field(() => CompanyCreateWithoutCommentInput, {nullable:false})
    @Type(() => CompanyCreateWithoutCommentInput)
    create!: CompanyCreateWithoutCommentInput;
}
