import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateManyCompanyInput } from './comment-create-many-company.input';
import { Type } from 'class-transformer';

@InputType()
export class CommentCreateManyCompanyInputEnvelope {

    @Field(() => [CommentCreateManyCompanyInput], {nullable:false})
    @Type(() => CommentCreateManyCompanyInput)
    data!: Array<CommentCreateManyCompanyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
