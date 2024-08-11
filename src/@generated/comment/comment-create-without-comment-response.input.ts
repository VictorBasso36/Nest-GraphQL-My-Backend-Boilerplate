import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { CompanyCreateNestedOneWithoutCommentInput } from '../company/company-create-nested-one-without-comment.input';
import { UserCreateNestedOneWithoutCommentInput } from '../user/user-create-nested-one-without-comment.input';

@InputType()
export class CommentCreateWithoutCommentResponseInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    serviceType?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Float, {nullable:true})
    rating?: number;

    @Field(() => Boolean, {nullable:true})
    approved?: boolean;

    @Field(() => Boolean, {nullable:true})
    removed?: boolean;

    @Field(() => Boolean, {nullable:true})
    resolved?: boolean;

    @Field(() => CompanyCreateNestedOneWithoutCommentInput, {nullable:true})
    Company?: CompanyCreateNestedOneWithoutCommentInput;

    @Field(() => UserCreateNestedOneWithoutCommentInput, {nullable:true})
    User?: UserCreateNestedOneWithoutCommentInput;
}
