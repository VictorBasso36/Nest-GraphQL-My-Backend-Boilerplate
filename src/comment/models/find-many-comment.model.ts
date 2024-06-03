import { Field, ObjectType } from "@nestjs/graphql"
import { Comment } from 'src/@generated/comment/comment.model';
import { PageInfo } from "src/common/pagination/page-info.model"

@ObjectType()
export class CommentPaginatedModel {
  @Field(() => PageInfo, {nullable: true})
  pageInfo: PageInfo;

  @Field(() => [Comment])
  nodes: [Comment];
}
