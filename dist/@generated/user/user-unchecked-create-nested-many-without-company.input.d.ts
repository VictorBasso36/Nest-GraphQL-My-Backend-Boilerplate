import { UserCreateWithoutCompanyInput } from './user-create-without-company.input';
import { UserCreateOrConnectWithoutCompanyInput } from './user-create-or-connect-without-company.input';
import { UserCreateManyCompanyInputEnvelope } from './user-create-many-company-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
export declare class UserUncheckedCreateNestedManyWithoutCompanyInput {
    create?: Array<UserCreateWithoutCompanyInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutCompanyInput>;
    createMany?: UserCreateManyCompanyInputEnvelope;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'resetPasswordToken'>>;
}
