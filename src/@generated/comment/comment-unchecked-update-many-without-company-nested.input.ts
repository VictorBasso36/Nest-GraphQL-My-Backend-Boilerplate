import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutCompanyInput } from './comment-create-without-company.input';
import { Type } from 'class-transformer';
import { CommentCreateOrConnectWithoutCompanyInput } from './comment-create-or-connect-without-company.input';
import { CommentUpsertWithWhereUniqueWithoutCompanyInput } from './comment-upsert-with-where-unique-without-company.input';
import { CommentCreateManyCompanyInputEnvelope } from './comment-create-many-company-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentUpdateWithWhereUniqueWithoutCompanyInput } from './comment-update-with-where-unique-without-company.input';
import { CommentUpdateManyWithWhereWithoutCompanyInput } from './comment-update-many-with-where-without-company.input';
import { CommentScalarWhereInput } from './comment-scalar-where.input';

@InputType()
export class CommentUncheckedUpdateManyWithoutCompanyNestedInput {

    @Field(() => [CommentCreateWithoutCompanyInput], {nullable:true})
    @Type(() => CommentCreateWithoutCompanyInput)
    create?: Array<CommentCreateWithoutCompanyInput>;

    @Field(() => [CommentCreateOrConnectWithoutCompanyInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutCompanyInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutCompanyInput>;

    @Field(() => [CommentUpsertWithWhereUniqueWithoutCompanyInput], {nullable:true})
    @Type(() => CommentUpsertWithWhereUniqueWithoutCompanyInput)
    upsert?: Array<CommentUpsertWithWhereUniqueWithoutCompanyInput>;

    @Field(() => CommentCreateManyCompanyInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyCompanyInputEnvelope)
    createMany?: CommentCreateManyCompanyInputEnvelope;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;

    @Field(() => [CommentUpdateWithWhereUniqueWithoutCompanyInput], {nullable:true})
    @Type(() => CommentUpdateWithWhereUniqueWithoutCompanyInput)
    update?: Array<CommentUpdateWithWhereUniqueWithoutCompanyInput>;

    @Field(() => [CommentUpdateManyWithWhereWithoutCompanyInput], {nullable:true})
    @Type(() => CommentUpdateManyWithWhereWithoutCompanyInput)
    updateMany?: Array<CommentUpdateManyWithWhereWithoutCompanyInput>;

    @Field(() => [CommentScalarWhereInput], {nullable:true})
    @Type(() => CommentScalarWhereInput)
    deleteMany?: Array<CommentScalarWhereInput>;
}
