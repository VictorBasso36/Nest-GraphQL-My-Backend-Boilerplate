import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutCompanyInput } from './user-update-without-company.input';
export declare class UserUpdateWithWhereUniqueWithoutCompanyInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'resetPasswordToken'>;
    data: UserUpdateWithoutCompanyInput;
}
