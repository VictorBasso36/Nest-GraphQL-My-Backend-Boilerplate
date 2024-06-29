import { UserCreateNestedManyWithoutCompanyInput } from '../user/user-create-nested-many-without-company.input';
import { CommentCreateNestedManyWithoutCompanyInput } from '../comment/comment-create-nested-many-without-company.input';
export declare class CompanyCreateInput {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cnpj: string;
    location: string;
    description?: string;
    urlImage?: string;
    working?: string;
    approved?: boolean;
    name: string;
    ratingCount?: number;
    rating?: number;
    User?: UserCreateNestedManyWithoutCompanyInput;
    Comment?: CommentCreateNestedManyWithoutCompanyInput;
}
