import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@InputType()
export class CommentUncheckedCreateWithoutCommentResponseInput {

    @Field(() => String, {nullable:true})
    id?: string;

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

    @Field(() => String, {nullable:false})
    companyId!: string;
}
