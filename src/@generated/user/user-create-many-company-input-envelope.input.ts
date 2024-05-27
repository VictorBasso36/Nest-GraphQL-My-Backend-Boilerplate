import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateManyCompanyInput } from './user-create-many-company.input';
import { Type } from 'class-transformer';

@InputType()
export class UserCreateManyCompanyInputEnvelope {

    @Field(() => [UserCreateManyCompanyInput], {nullable:false})
    @Type(() => UserCreateManyCompanyInput)
    data!: Array<UserCreateManyCompanyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
