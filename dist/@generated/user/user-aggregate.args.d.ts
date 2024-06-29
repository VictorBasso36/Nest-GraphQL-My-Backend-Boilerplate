import { UserWhereInput } from './user-where.input';
import { UserOrderByWithRelationAndSearchRelevanceInput } from './user-order-by-with-relation-and-search-relevance.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCountAggregateInput } from './user-count-aggregate.input';
import { UserMinAggregateInput } from './user-min-aggregate.input';
import { UserMaxAggregateInput } from './user-max-aggregate.input';
export declare class UserAggregateArgs {
    where?: UserWhereInput;
    orderBy?: Array<UserOrderByWithRelationAndSearchRelevanceInput>;
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'resetPasswordToken'>;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInput;
    _min?: UserMinAggregateInput;
    _max?: UserMaxAggregateInput;
}
