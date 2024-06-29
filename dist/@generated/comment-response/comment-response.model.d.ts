import { Comment } from '../comment/comment.model';
export declare class CommentResponse {
    id: string;
    CommentId: string;
    approved: boolean | null;
    createdAt: Date;
    updatedAt: Date;
    content: string;
    Comment?: Comment;
}
