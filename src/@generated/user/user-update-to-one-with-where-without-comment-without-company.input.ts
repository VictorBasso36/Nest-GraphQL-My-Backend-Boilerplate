import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutCommentWithoutCompanyInput } from './user-update-without-comment-without-company.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutCommentWithoutCompanyInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutCommentWithoutCompanyInput, {nullable:false})
    @Type(() => UserUpdateWithoutCommentWithoutCompanyInput)
    data!: UserUpdateWithoutCommentWithoutCompanyInput;
}
