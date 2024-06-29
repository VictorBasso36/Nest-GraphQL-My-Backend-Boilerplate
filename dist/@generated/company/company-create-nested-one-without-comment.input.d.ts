import { CompanyCreateWithoutCommentInput } from './company-create-without-comment.input';
import { CompanyCreateOrConnectWithoutCommentInput } from './company-create-or-connect-without-comment.input';
import { Prisma } from '@prisma/client';
import { CompanyWhereUniqueInput } from './company-where-unique.input';
export declare class CompanyCreateNestedOneWithoutCommentInput {
    create?: CompanyCreateWithoutCommentInput;
    connectOrCreate?: CompanyCreateOrConnectWithoutCommentInput;
    connect?: Prisma.AtLeast<CompanyWhereUniqueInput, 'id' | 'cnpj'>;
}
