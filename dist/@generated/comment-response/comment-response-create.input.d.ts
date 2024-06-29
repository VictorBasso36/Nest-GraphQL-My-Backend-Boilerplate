import { CommentCreateNestedOneWithoutCommentResponseInput } from '../comment/comment-create-nested-one-without-comment-response.input';
export declare class CommentResponseCreateInput {
    id?: string;
    approved?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    content: string;
    Comment: CommentCreateNestedOneWithoutCommentResponseInput;
}
