import { CommentResponse } from 'src/@generated/comment-response/comment-response.model';
import { PageInfo } from "src/common/pagination/page-info.model";
export declare class CommentResponsePaginatedModel {
    pageInfo: PageInfo;
    nodes: [CommentResponse];
}
