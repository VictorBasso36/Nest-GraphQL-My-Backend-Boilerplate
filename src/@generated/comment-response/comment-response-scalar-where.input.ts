import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class CommentResponseScalarWhereInput {

    @Field(() => [CommentResponseScalarWhereInput], {nullable:true})
    AND?: Array<CommentResponseScalarWhereInput>;

    @Field(() => [CommentResponseScalarWhereInput], {nullable:true})
    OR?: Array<CommentResponseScalarWhereInput>;

    @Field(() => [CommentResponseScalarWhereInput], {nullable:true})
    NOT?: Array<CommentResponseScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    CommentId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    content?: StringFilter;
}
