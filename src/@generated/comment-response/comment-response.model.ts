import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Comment } from '../comment/comment.model';

@ObjectType()
export class CommentResponse {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    CommentId!: string;

    @Field(() => Boolean, {nullable:true,defaultValue:false})
    approved!: boolean | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Comment, {nullable:false})
    Comment?: Comment;
}
