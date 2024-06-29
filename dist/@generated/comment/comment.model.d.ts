import { Company } from '../company/company.model';
import { User } from '../user/user.model';
import { CommentResponse } from '../comment-response/comment-response.model';
import { CommentCount } from './comment-count.output';
export declare class Comment {
    id: string;
    title: string | null;
    serviceType: string | null;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    rating: number | null;
    approved: boolean | null;
    removed: boolean | null;
    companyId: string | null;
    userId: string | null;
    Company?: Company | null;
    User?: User | null;
    CommentResponse?: Array<CommentResponse>;
    _count?: CommentCount;
}
