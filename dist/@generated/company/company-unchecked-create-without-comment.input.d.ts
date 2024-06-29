import { UserUncheckedCreateNestedManyWithoutCompanyInput } from '../user/user-unchecked-create-nested-many-without-company.input';
export declare class CompanyUncheckedCreateWithoutCommentInput {
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
}
