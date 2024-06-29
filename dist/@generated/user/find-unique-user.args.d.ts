import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
export declare class FindUniqueUserArgs {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'resetPasswordToken'>;
}
