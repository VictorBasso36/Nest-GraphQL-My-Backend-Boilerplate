import { UserWhereInput } from './user-where.input';
import { UserOrderByWithRelationAndSearchRelevanceInput } from './user-order-by-with-relation-and-search-relevance.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserScalarFieldEnum } from './user-scalar-field.enum';
export declare class FindFirstUserOrThrowArgs {
    where?: UserWhereInput;
    orderBy?: Array<UserOrderByWithRelationAndSearchRelevanceInput>;
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'resetPasswordToken'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}
