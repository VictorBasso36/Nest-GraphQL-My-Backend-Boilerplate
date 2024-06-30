import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommentWithoutCompanyWhereUniqueInput } from './comment-without-company-where-unique.input';
import { Type } from 'class-transformer';
import { CommentWithoutCompanyCreateInput } from './comment-without-company-create.input';
import { CommentWithoutCompanyUpdateInput } from './comment-without-company-update.input';

@ArgsType()
export class UpsertOneCommentWithoutCompanyArgs {

    @Field(() => CommentWithoutCompanyWhereUniqueInput, {nullable:false})
    @Type(() => CommentWithoutCompanyWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWithoutCompanyWhereUniqueInput, 'id'>;

    @Field(() => CommentWithoutCompanyCreateInput, {nullable:false})
    @Type(() => CommentWithoutCompanyCreateInput)
    create!: CommentWithoutCompanyCreateInput;

    @Field(() => CommentWithoutCompanyUpdateInput, {nullable:false})
    @Type(() => CommentWithoutCompanyUpdateInput)
    update!: CommentWithoutCompanyUpdateInput;
}
