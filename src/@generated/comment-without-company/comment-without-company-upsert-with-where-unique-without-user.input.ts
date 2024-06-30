import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommentWithoutCompanyWhereUniqueInput } from './comment-without-company-where-unique.input';
import { Type } from 'class-transformer';
import { CommentWithoutCompanyUpdateWithoutUserInput } from './comment-without-company-update-without-user.input';
import { CommentWithoutCompanyCreateWithoutUserInput } from './comment-without-company-create-without-user.input';

@InputType()
export class CommentWithoutCompanyUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => CommentWithoutCompanyWhereUniqueInput, {nullable:false})
    @Type(() => CommentWithoutCompanyWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWithoutCompanyWhereUniqueInput, 'id'>;

    @Field(() => CommentWithoutCompanyUpdateWithoutUserInput, {nullable:false})
    @Type(() => CommentWithoutCompanyUpdateWithoutUserInput)
    update!: CommentWithoutCompanyUpdateWithoutUserInput;

    @Field(() => CommentWithoutCompanyCreateWithoutUserInput, {nullable:false})
    @Type(() => CommentWithoutCompanyCreateWithoutUserInput)
    create!: CommentWithoutCompanyCreateWithoutUserInput;
}
