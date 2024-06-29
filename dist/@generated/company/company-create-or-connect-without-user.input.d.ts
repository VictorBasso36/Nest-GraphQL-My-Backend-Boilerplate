import { Prisma } from '@prisma/client';
import { CompanyWhereUniqueInput } from './company-where-unique.input';
import { CompanyCreateWithoutUserInput } from './company-create-without-user.input';
export declare class CompanyCreateOrConnectWithoutUserInput {
    where: Prisma.AtLeast<CompanyWhereUniqueInput, 'id' | 'cnpj'>;
    create: CompanyCreateWithoutUserInput;
}
