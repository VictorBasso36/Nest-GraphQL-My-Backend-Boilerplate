import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutCompanyInput } from './comment-create-without-company.input';
import { Type } from 'class-transformer';
import { CommentCreateOrConnectWithoutCompanyInput } from './comment-create-or-connect-without-company.input';
import { CommentCreateManyCompanyInputEnvelope } from './comment-create-many-company-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@InputType()
export class CommentCreateNestedManyWithoutCompanyInput {

    @Field(() => [CommentCreateWithoutCompanyInput], {nullable:true})
    @Type(() => CommentCreateWithoutCompanyInput)
    create?: Array<CommentCreateWithoutCompanyInput>;

    @Field(() => [CommentCreateOrConnectWithoutCompanyInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutCompanyInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutCompanyInput>;

    @Field(() => CommentCreateManyCompanyInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyCompanyInputEnvelope)
    createMany?: CommentCreateManyCompanyInputEnvelope;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
}
