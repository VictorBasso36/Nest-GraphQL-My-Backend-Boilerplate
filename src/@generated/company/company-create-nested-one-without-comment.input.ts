import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompanyCreateWithoutCommentInput } from './company-create-without-comment.input';
import { Type } from 'class-transformer';
import { CompanyCreateOrConnectWithoutCommentInput } from './company-create-or-connect-without-comment.input';
import { Prisma } from '@prisma/client';
import { CompanyWhereUniqueInput } from './company-where-unique.input';

@InputType()
export class CompanyCreateNestedOneWithoutCommentInput {

    @Field(() => CompanyCreateWithoutCommentInput, {nullable:true})
    @Type(() => CompanyCreateWithoutCommentInput)
    create?: CompanyCreateWithoutCommentInput;

    @Field(() => CompanyCreateOrConnectWithoutCommentInput, {nullable:true})
    @Type(() => CompanyCreateOrConnectWithoutCommentInput)
    connectOrCreate?: CompanyCreateOrConnectWithoutCommentInput;

    @Field(() => CompanyWhereUniqueInput, {nullable:true})
    @Type(() => CompanyWhereUniqueInput)
    connect?: Prisma.AtLeast<CompanyWhereUniqueInput, 'id' | 'cnpj' | 'name'>;
}
