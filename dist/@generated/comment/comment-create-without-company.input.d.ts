import { UserCreateNestedOneWithoutCommentInput } from '../user/user-create-nested-one-without-comment.input';
import { CommentResponseCreateNestedManyWithoutCommentInput } from '../comment-response/comment-response-create-nested-many-without-comment.input';
export declare class CommentCreateWithoutCompanyInput {
    id?: string;
    title?: string;
    serviceType?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    rating?: number;
    approved?: boolean;
    removed?: boolean;
    User?: UserCreateNestedOneWithoutCommentInput;
    CommentResponse?: CommentResponseCreateNestedManyWithoutCommentInput;
}
