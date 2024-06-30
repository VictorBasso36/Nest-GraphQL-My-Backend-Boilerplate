import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommentWithoutCompanyUpdateInput } from './comment-without-company-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CommentWithoutCompanyWhereUniqueInput } from './comment-without-company-where-unique.input';

@ArgsType()
export class UpdateOneCommentWithoutCompanyArgs {

    @Field(() => CommentWithoutCompanyUpdateInput, {nullable:false})
    @Type(() => CommentWithoutCompanyUpdateInput)
    data!: CommentWithoutCompanyUpdateInput;

    @Field(() => CommentWithoutCompanyWhereUniqueInput, {nullable:false})
    @Type(() => CommentWithoutCompanyWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWithoutCompanyWhereUniqueInput, 'id'>;
}
