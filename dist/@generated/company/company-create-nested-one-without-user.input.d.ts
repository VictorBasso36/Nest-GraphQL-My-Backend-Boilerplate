import { CompanyCreateWithoutUserInput } from './company-create-without-user.input';
import { CompanyCreateOrConnectWithoutUserInput } from './company-create-or-connect-without-user.input';
import { Prisma } from '@prisma/client';
import { CompanyWhereUniqueInput } from './company-where-unique.input';
export declare class CompanyCreateNestedOneWithoutUserInput {
    create?: CompanyCreateWithoutUserInput;
    connectOrCreate?: CompanyCreateOrConnectWithoutUserInput;
    connect?: Prisma.AtLeast<CompanyWhereUniqueInput, 'id' | 'cnpj'>;
}
