import { CompanyCreateNestedOneWithoutCommentInput } from '../company/company-create-nested-one-without-comment.input';
import { UserCreateNestedOneWithoutCommentInput } from '../user/user-create-nested-one-without-comment.input';
export declare class CommentCreateWithoutCommentResponseInput {
    id?: string;
    title?: string;
    serviceType?: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    rating?: number;
    approved?: boolean;
    removed?: boolean;
    Company?: CompanyCreateNestedOneWithoutCommentInput;
    User?: UserCreateNestedOneWithoutCommentInput;
}
