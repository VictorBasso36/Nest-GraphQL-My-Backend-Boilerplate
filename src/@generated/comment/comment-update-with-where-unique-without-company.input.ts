import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { Type } from 'class-transformer';
import { CommentUpdateWithoutCompanyInput } from './comment-update-without-company.input';

@InputType()
export class CommentUpdateWithWhereUniqueWithoutCompanyInput {

    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;

    @Field(() => CommentUpdateWithoutCompanyInput, {nullable:false})
    @Type(() => CommentUpdateWithoutCompanyInput)
    data!: CommentUpdateWithoutCompanyInput;
}
