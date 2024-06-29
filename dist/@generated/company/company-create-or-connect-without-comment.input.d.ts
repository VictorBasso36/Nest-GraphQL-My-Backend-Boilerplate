import { Prisma } from '@prisma/client';
import { CompanyWhereUniqueInput } from './company-where-unique.input';
import { CompanyCreateWithoutCommentInput } from './company-create-without-comment.input';
export declare class CompanyCreateOrConnectWithoutCommentInput {
    where: Prisma.AtLeast<CompanyWhereUniqueInput, 'id' | 'cnpj'>;
    create: CompanyCreateWithoutCommentInput;
}
