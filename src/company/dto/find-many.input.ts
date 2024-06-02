import { Field, ObjectType, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { FindManyCompanyArgs } from 'src/@generated/company/find-many-company.args';
import { PageInfoInput } from 'src/common/pagination/page-info-input.model';

@InputType()
export class ExtendedFindManyCompanyArgs{

    @Field(() => PageInfoInput, { nullable: true })
    PageInfo: PageInfoInput;

    @Field(() => FindManyCompanyArgs, { nullable: true })
    nodes: FindManyCompanyArgs
}
