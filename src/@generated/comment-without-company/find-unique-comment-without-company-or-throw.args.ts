import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommentWithoutCompanyWhereUniqueInput } from './comment-without-company-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueCommentWithoutCompanyOrThrowArgs {

    @Field(() => CommentWithoutCompanyWhereUniqueInput, {nullable:false})
    @Type(() => CommentWithoutCompanyWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWithoutCompanyWhereUniqueInput, 'id'>;
}
