import { Field, ObjectType } from "@nestjs/graphql"
import { Company } from "src/@generated/company/company.model"
import { PageInfo } from "src/common/pagination/page-info.model"

@ObjectType()
export class CompanyPaginatedModel {
  @Field(() => PageInfo, {nullable: true})
  pageInfo: PageInfo;

  @Field(() => [Company])
  nodes: [Company];
}
