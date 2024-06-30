import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutCommentWithoutCompanyInput } from './user-update-without-comment-without-company.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutCommentWithoutCompanyInput } from './user-create-without-comment-without-company.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutCommentWithoutCompanyInput {

    @Field(() => UserUpdateWithoutCommentWithoutCompanyInput, {nullable:false})
    @Type(() => UserUpdateWithoutCommentWithoutCompanyInput)
    update!: UserUpdateWithoutCommentWithoutCompanyInput;

    @Field(() => UserCreateWithoutCommentWithoutCompanyInput, {nullable:false})
    @Type(() => UserCreateWithoutCommentWithoutCompanyInput)
    create!: UserCreateWithoutCommentWithoutCompanyInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
