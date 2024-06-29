import { Prisma } from '@prisma/client';
import { CompanyWhereUniqueInput } from './company-where-unique.input';
import { CompanyCreateInput } from './company-create.input';
import { CompanyUpdateInput } from './company-update.input';
export declare class UpsertOneCompanyArgs {
    where: Prisma.AtLeast<CompanyWhereUniqueInput, 'id' | 'cnpj'>;
    create: CompanyCreateInput;
    update: CompanyUpdateInput;
}
