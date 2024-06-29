import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutCompanyInput } from './user-create-without-company.input';
export declare class UserCreateOrConnectWithoutCompanyInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'resetPasswordToken'>;
    create: UserCreateWithoutCompanyInput;
}
