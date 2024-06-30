import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { Company } from '../company/company.model';
import { Comment } from '../comment/comment.model';
import { CommentWithoutCompany } from '../comment-without-company/comment-without-company.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:true})
    firstname!: string | null;

    @Field(() => String, {nullable:true})
    lastname!: string | null;

    @Field(() => Role, {nullable:false})
    role!: keyof typeof Role;

    @Field(() => String, {nullable:true})
    resetPasswordToken!: string | null;

    @Field(() => Date, {nullable:true})
    resetPasswordExpires!: Date | null;

    @Field(() => String, {nullable:true})
    companyId!: string | null;

    @Field(() => Company, {nullable:true})
    Company?: Company | null;

    @Field(() => [Comment], {nullable:true})
    Comment?: Array<Comment>;

    @Field(() => [CommentWithoutCompany], {nullable:true})
    CommentWithoutCompany?: Array<CommentWithoutCompany>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
