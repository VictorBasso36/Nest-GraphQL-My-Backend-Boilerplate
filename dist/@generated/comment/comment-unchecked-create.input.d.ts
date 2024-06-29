import { CommentResponseUncheckedCreateNestedManyWithoutCommentInput } from '../comment-response/comment-response-unchecked-create-nested-many-without-comment.input';
export declare class CommentUncheckedCreateInput {
    id?: string;
    title?: string;
    serviceType?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    rating?: number;
    approved?: boolean;
    removed?: boolean;
    companyId?: string;
    userId?: string;
    CommentResponse?: CommentResponseUncheckedCreateNestedManyWithoutCommentInput;
}
