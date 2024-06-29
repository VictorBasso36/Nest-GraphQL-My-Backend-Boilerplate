import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutCompanyInput } from './user-update-without-company.input';
import { UserCreateWithoutCompanyInput } from './user-create-without-company.input';
export declare class UserUpsertWithWhereUniqueWithoutCompanyInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'resetPasswordToken'>;
    update: UserUpdateWithoutCompanyInput;
    create: UserCreateWithoutCompanyInput;
}
