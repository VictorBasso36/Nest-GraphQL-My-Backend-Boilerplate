import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateInput } from './user-create.input';
import { UserUpdateInput } from './user-update.input';
export declare class UpsertOneUserArgs {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'resetPasswordToken'>;
    create: UserCreateInput;
    update: UserUpdateInput;
}
