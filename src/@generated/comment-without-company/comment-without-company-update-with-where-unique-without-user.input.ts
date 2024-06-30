import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommentWithoutCompanyWhereUniqueInput } from './comment-without-company-where-unique.input';
import { Type } from 'class-transformer';
import { CommentWithoutCompanyUpdateWithoutUserInput } from './comment-without-company-update-without-user.input';

@InputType()
export class CommentWithoutCompanyUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => CommentWithoutCompanyWhereUniqueInput, {nullable:false})
    @Type(() => CommentWithoutCompanyWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWithoutCompanyWhereUniqueInput, 'id'>;

    @Field(() => CommentWithoutCompanyUpdateWithoutUserInput, {nullable:false})
    @Type(() => CommentWithoutCompanyUpdateWithoutUserInput)
    data!: CommentWithoutCompanyUpdateWithoutUserInput;
}
