import { CompanyCreateWithoutCommentInput } from './company-create-without-comment.input';
import { CompanyCreateOrConnectWithoutCommentInput } from './company-create-or-connect-without-comment.input';
import { CompanyUpsertWithoutCommentInput } from './company-upsert-without-comment.input';
import { CompanyWhereInput } from './company-where.input';
import { Prisma } from '@prisma/client';
import { CompanyWhereUniqueInput } from './company-where-unique.input';
import { CompanyUpdateToOneWithWhereWithoutCommentInput } from './company-update-to-one-with-where-without-comment.input';
export declare class CompanyUpdateOneWithoutCommentNestedInput {
    create?: CompanyCreateWithoutCommentInput;
    connectOrCreate?: CompanyCreateOrConnectWithoutCommentInput;
    upsert?: CompanyUpsertWithoutCommentInput;
    disconnect?: CompanyWhereInput;
    delete?: CompanyWhereInput;
    connect?: Prisma.AtLeast<CompanyWhereUniqueInput, 'id' | 'cnpj'>;
    update?: CompanyUpdateToOneWithWhereWithoutCommentInput;
}
