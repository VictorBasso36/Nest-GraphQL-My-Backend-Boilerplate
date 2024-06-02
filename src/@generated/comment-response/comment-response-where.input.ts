import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { CommentRelationFilter } from '../comment/comment-relation-filter.input';

@InputType()
export class CommentResponseWhereInput {

    @Field(() => [CommentResponseWhereInput], {nullable:true})
    AND?: Array<CommentResponseWhereInput>;

    @Field(() => [CommentResponseWhereInput], {nullable:true})
    OR?: Array<CommentResponseWhereInput>;

    @Field(() => [CommentResponseWhereInput], {nullable:true})
    NOT?: Array<CommentResponseWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    CommentId?: StringFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    approved?: BoolNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    content?: StringFilter;

    @Field(() => CommentRelationFilter, {nullable:true})
    Comment?: CommentRelationFilter;
}
