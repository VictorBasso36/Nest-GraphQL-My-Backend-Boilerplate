import { Prisma } from '@prisma/client';
import { CompanyWhereUniqueInput } from './company-where-unique.input';
export declare class DeleteOneCompanyArgs {
    where: Prisma.AtLeast<CompanyWhereUniqueInput, 'id' | 'cnpj'>;
}
