import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { Type } from 'class-transformer';
import { CommentCreateWithoutCompanyInput } from './comment-create-without-company.input';

@InputType()
export class CommentCreateOrConnectWithoutCompanyInput {

    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;

    @Field(() => CommentCreateWithoutCompanyInput, {nullable:false})
    @Type(() => CommentCreateWithoutCompanyInput)
    create!: CommentCreateWithoutCompanyInput;
}
