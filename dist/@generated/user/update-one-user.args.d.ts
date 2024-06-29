import { UserUpdateInput } from './user-update.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
export declare class UpdateOneUserArgs {
    data: UserUpdateInput;
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'resetPasswordToken'>;
}
