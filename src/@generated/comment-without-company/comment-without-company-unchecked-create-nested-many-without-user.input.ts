import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentWithoutCompanyCreateWithoutUserInput } from './comment-without-company-create-without-user.input';
import { Type } from 'class-transformer';
import { CommentWithoutCompanyCreateOrConnectWithoutUserInput } from './comment-without-company-create-or-connect-without-user.input';
import { CommentWithoutCompanyCreateManyUserInputEnvelope } from './comment-without-company-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CommentWithoutCompanyWhereUniqueInput } from './comment-without-company-where-unique.input';

@InputType()
export class CommentWithoutCompanyUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [CommentWithoutCompanyCreateWithoutUserInput], {nullable:true})
    @Type(() => CommentWithoutCompanyCreateWithoutUserInput)
    create?: Array<CommentWithoutCompanyCreateWithoutUserInput>;

    @Field(() => [CommentWithoutCompanyCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => CommentWithoutCompanyCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<CommentWithoutCompanyCreateOrConnectWithoutUserInput>;

    @Field(() => CommentWithoutCompanyCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => CommentWithoutCompanyCreateManyUserInputEnvelope)
    createMany?: CommentWithoutCompanyCreateManyUserInputEnvelope;

    @Field(() => [CommentWithoutCompanyWhereUniqueInput], {nullable:true})
    @Type(() => CommentWithoutCompanyWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentWithoutCompanyWhereUniqueInput, 'id'>>;
}
