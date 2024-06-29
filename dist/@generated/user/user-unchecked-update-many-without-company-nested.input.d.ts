import { UserCreateWithoutCompanyInput } from './user-create-without-company.input';
import { UserCreateOrConnectWithoutCompanyInput } from './user-create-or-connect-without-company.input';
import { UserUpsertWithWhereUniqueWithoutCompanyInput } from './user-upsert-with-where-unique-without-company.input';
import { UserCreateManyCompanyInputEnvelope } from './user-create-many-company-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutCompanyInput } from './user-update-with-where-unique-without-company.input';
import { UserUpdateManyWithWhereWithoutCompanyInput } from './user-update-many-with-where-without-company.input';
import { UserScalarWhereInput } from './user-scalar-where.input';
export declare class UserUncheckedUpdateManyWithoutCompanyNestedInput {
    create?: Array<UserCreateWithoutCompanyInput>;
    connectOrCreate?: Array<UserCreateOrConnectWithoutCompanyInput>;
    upsert?: Array<UserUpsertWithWhereUniqueWithoutCompanyInput>;
    createMany?: UserCreateManyCompanyInputEnvelope;
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'resetPasswordToken'>>;
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'resetPasswordToken'>>;
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'resetPasswordToken'>>;
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'resetPasswordToken'>>;
    update?: Array<UserUpdateWithWhereUniqueWithoutCompanyInput>;
    updateMany?: Array<UserUpdateManyWithWhereWithoutCompanyInput>;
    deleteMany?: Array<UserScalarWhereInput>;
}
