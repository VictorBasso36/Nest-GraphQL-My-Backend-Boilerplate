import { CompanyCreateWithoutUserInput } from './company-create-without-user.input';
import { CompanyCreateOrConnectWithoutUserInput } from './company-create-or-connect-without-user.input';
import { CompanyUpsertWithoutUserInput } from './company-upsert-without-user.input';
import { CompanyWhereInput } from './company-where.input';
import { Prisma } from '@prisma/client';
import { CompanyWhereUniqueInput } from './company-where-unique.input';
import { CompanyUpdateToOneWithWhereWithoutUserInput } from './company-update-to-one-with-where-without-user.input';
export declare class CompanyUpdateOneWithoutUserNestedInput {
    create?: CompanyCreateWithoutUserInput;
    connectOrCreate?: CompanyCreateOrConnectWithoutUserInput;
    upsert?: CompanyUpsertWithoutUserInput;
    disconnect?: CompanyWhereInput;
    delete?: CompanyWhereInput;
    connect?: Prisma.AtLeast<CompanyWhereUniqueInput, 'id' | 'cnpj'>;
    update?: CompanyUpdateToOneWithWhereWithoutUserInput;
}
