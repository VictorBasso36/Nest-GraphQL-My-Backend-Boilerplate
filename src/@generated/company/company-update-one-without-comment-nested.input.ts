import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompanyCreateWithoutCommentInput } from './company-create-without-comment.input';
import { Type } from 'class-transformer';
import { CompanyCreateOrConnectWithoutCommentInput } from './company-create-or-connect-without-comment.input';
import { CompanyUpsertWithoutCommentInput } from './company-upsert-without-comment.input';
import { CompanyWhereInput } from './company-where.input';
import { Prisma } from '@prisma/client';
import { CompanyWhereUniqueInput } from './company-where-unique.input';
import { CompanyUpdateToOneWithWhereWithoutCommentInput } from './company-update-to-one-with-where-without-comment.input';

@InputType()
export class CompanyUpdateOneWithoutCommentNestedInput {

    @Field(() => CompanyCreateWithoutCommentInput, {nullable:true})
    @Type(() => CompanyCreateWithoutCommentInput)
    create?: CompanyCreateWithoutCommentInput;

    @Field(() => CompanyCreateOrConnectWithoutCommentInput, {nullable:true})
    @Type(() => CompanyCreateOrConnectWithoutCommentInput)
    connectOrCreate?: CompanyCreateOrConnectWithoutCommentInput;

    @Field(() => CompanyUpsertWithoutCommentInput, {nullable:true})
    @Type(() => CompanyUpsertWithoutCommentInput)
    upsert?: CompanyUpsertWithoutCommentInput;

    @Field(() => CompanyWhereInput, {nullable:true})
    @Type(() => CompanyWhereInput)
    disconnect?: CompanyWhereInput;

    @Field(() => CompanyWhereInput, {nullable:true})
    @Type(() => CompanyWhereInput)
    delete?: CompanyWhereInput;

    @Field(() => CompanyWhereUniqueInput, {nullable:true})
    @Type(() => CompanyWhereUniqueInput)
    connect?: Prisma.AtLeast<CompanyWhereUniqueInput, 'id' | 'cnpj'>;

    @Field(() => CompanyUpdateToOneWithWhereWithoutCommentInput, {nullable:true})
    @Type(() => CompanyUpdateToOneWithWhereWithoutCommentInput)
    update?: CompanyUpdateToOneWithWhereWithoutCommentInput;
}
