import { Field, ObjectType } from "@nestjs/graphql"
import { CommentResponse } from 'src/@generated/comment-response/comment-response.model';
import { PageInfo } from "src/common/pagination/page-info.model"

@ObjectType()
export class CommentResponsePaginatedModel {
  @Field(() => PageInfo, {nullable: true})
  pageInfo: PageInfo;

  @Field(() => [CommentResponse])
  nodes: [CommentResponse];
}
