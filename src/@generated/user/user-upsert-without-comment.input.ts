import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutCommentInput } from './user-update-without-comment.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutCommentInput } from './user-create-without-comment.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutCommentInput {

    @Field(() => UserUpdateWithoutCommentInput, {nullable:false})
    @Type(() => UserUpdateWithoutCommentInput)
    update!: UserUpdateWithoutCommentInput;

    @Field(() => UserCreateWithoutCommentInput, {nullable:false})
    @Type(() => UserCreateWithoutCommentInput)
    create!: UserCreateWithoutCommentInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
