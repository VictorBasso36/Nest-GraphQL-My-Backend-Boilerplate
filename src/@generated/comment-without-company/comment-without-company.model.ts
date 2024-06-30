import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { User } from '../user/user.model';

@ObjectType()
export class CommentWithoutCompany {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    cnpj!: string;

    @Field(() => Float, {nullable:true})
    rating!: number | null;

    @Field(() => String, {nullable:true})
    title!: string | null;

    @Field(() => String, {nullable:true})
    serviceType!: string | null;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:true})
    userId!: string | null;

    @Field(() => User, {nullable:true})
    User?: User | null;
}
