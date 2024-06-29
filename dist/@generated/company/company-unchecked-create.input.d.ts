import { UserUncheckedCreateNestedManyWithoutCompanyInput } from '../user/user-unchecked-create-nested-many-without-company.input';
import { CommentUncheckedCreateNestedManyWithoutCompanyInput } from '../comment/comment-unchecked-create-nested-many-without-company.input';
export declare class CompanyUncheckedCreateInput {
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
    User?: UserUncheckedCreateNestedManyWithoutCompanyInput;
    Comment?: CommentUncheckedCreateNestedManyWithoutCompanyInput;
}
