import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentWithoutCompanyCreateWithoutUserInput } from './comment-without-company-create-without-user.input';
import { Type } from 'class-transformer';
import { CommentWithoutCompanyCreateOrConnectWithoutUserInput } from './comment-without-company-create-or-connect-without-user.input';
import { CommentWithoutCompanyUpsertWithWhereUniqueWithoutUserInput } from './comment-without-company-upsert-with-where-unique-without-user.input';
import { CommentWithoutCompanyCreateManyUserInputEnvelope } from './comment-without-company-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CommentWithoutCompanyWhereUniqueInput } from './comment-without-company-where-unique.input';
import { CommentWithoutCompanyUpdateWithWhereUniqueWithoutUserInput } from './comment-without-company-update-with-where-unique-without-user.input';
import { CommentWithoutCompanyUpdateManyWithWhereWithoutUserInput } from './comment-without-company-update-many-with-where-without-user.input';
import { CommentWithoutCompanyScalarWhereInput } from './comment-without-company-scalar-where.input';

@InputType()
export class CommentWithoutCompanyUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [CommentWithoutCompanyCreateWithoutUserInput], {nullable:true})
    @Type(() => CommentWithoutCompanyCreateWithoutUserInput)
    create?: Array<CommentWithoutCompanyCreateWithoutUserInput>;

    @Field(() => [CommentWithoutCompanyCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => CommentWithoutCompanyCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<CommentWithoutCompanyCreateOrConnectWithoutUserInput>;

    @Field(() => [CommentWithoutCompanyUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => CommentWithoutCompanyUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<CommentWithoutCompanyUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => CommentWithoutCompanyCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => CommentWithoutCompanyCreateManyUserInputEnvelope)
    createMany?: CommentWithoutCompanyCreateManyUserInputEnvelope;

    @Field(() => [CommentWithoutCompanyWhereUniqueInput], {nullable:true})
    @Type(() => CommentWithoutCompanyWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CommentWithoutCompanyWhereUniqueInput, 'id'>>;

    @Field(() => [CommentWithoutCompanyWhereUniqueInput], {nullable:true})
    @Type(() => CommentWithoutCompanyWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CommentWithoutCompanyWhereUniqueInput, 'id'>>;

    @Field(() => [CommentWithoutCompanyWhereUniqueInput], {nullable:true})
    @Type(() => CommentWithoutCompanyWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CommentWithoutCompanyWhereUniqueInput, 'id'>>;

    @Field(() => [CommentWithoutCompanyWhereUniqueInput], {nullable:true})
    @Type(() => CommentWithoutCompanyWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentWithoutCompanyWhereUniqueInput, 'id'>>;

    @Field(() => [CommentWithoutCompanyUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => CommentWithoutCompanyUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<CommentWithoutCompanyUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [CommentWithoutCompanyUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => CommentWithoutCompanyUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<CommentWithoutCompanyUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [CommentWithoutCompanyScalarWhereInput], {nullable:true})
    @Type(() => CommentWithoutCompanyScalarWhereInput)
    deleteMany?: Array<CommentWithoutCompanyScalarWhereInput>;
}
