import { CompanyUpdateInput } from './company-update.input';
import { Prisma } from '@prisma/client';
import { CompanyWhereUniqueInput } from './company-where-unique.input';
export declare class UpdateOneCompanyArgs {
    data: CompanyUpdateInput;
    where: Prisma.AtLeast<CompanyWhereUniqueInput, 'id' | 'cnpj'>;
}
