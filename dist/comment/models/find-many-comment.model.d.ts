import { Comment } from 'src/@generated/comment/comment.model';
import { PageInfo } from "src/common/pagination/page-info.model";
export declare class CommentPaginatedModel {
    pageInfo: PageInfo;
    nodes: [Comment];
}
