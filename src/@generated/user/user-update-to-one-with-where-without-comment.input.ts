import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutCommentInput } from './user-update-without-comment.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutCommentInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutCommentInput, {nullable:false})
    @Type(() => UserUpdateWithoutCommentInput)
    data!: UserUpdateWithoutCommentInput;
}
