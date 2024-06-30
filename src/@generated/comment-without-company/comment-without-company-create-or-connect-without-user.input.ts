import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommentWithoutCompanyWhereUniqueInput } from './comment-without-company-where-unique.input';
import { Type } from 'class-transformer';
import { CommentWithoutCompanyCreateWithoutUserInput } from './comment-without-company-create-without-user.input';

@InputType()
export class CommentWithoutCompanyCreateOrConnectWithoutUserInput {

    @Field(() => CommentWithoutCompanyWhereUniqueInput, {nullable:false})
    @Type(() => CommentWithoutCompanyWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWithoutCompanyWhereUniqueInput, 'id'>;

    @Field(() => CommentWithoutCompanyCreateWithoutUserInput, {nullable:false})
    @Type(() => CommentWithoutCompanyCreateWithoutUserInput)
    create!: CommentWithoutCompanyCreateWithoutUserInput;
}
