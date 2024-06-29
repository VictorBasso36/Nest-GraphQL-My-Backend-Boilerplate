import { Prisma } from '@prisma/client';
import { CompanyWhereUniqueInput } from './company-where-unique.input';
export declare class FindUniqueCompanyArgs {
    where: Prisma.AtLeast<CompanyWhereUniqueInput, 'id' | 'cnpj'>;
}
