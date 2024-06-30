import { Field, ObjectType } from "@nestjs/graphql"
import { CommentWithoutCompany } from 'src/@generated/comment-without-company/comment-without-company.model';
import { PageInfo } from "src/common/pagination/page-info.model"

@ObjectType()
export class CommentWithoutCompanyPaginatedModel {
  @Field(() => PageInfo, {nullable: true})
  pageInfo: PageInfo;

  @Field(() => [CommentWithoutCompany])
  nodes: [CommentWithoutCompany];
}
