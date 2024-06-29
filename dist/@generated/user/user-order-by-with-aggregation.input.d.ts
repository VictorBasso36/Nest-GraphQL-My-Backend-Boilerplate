import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserCountOrderByAggregateInput } from './user-count-order-by-aggregate.input';
import { UserMaxOrderByAggregateInput } from './user-max-order-by-aggregate.input';
import { UserMinOrderByAggregateInput } from './user-min-order-by-aggregate.input';
export declare class UserOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    email?: keyof typeof SortOrder;
    password?: keyof typeof SortOrder;
    firstname?: SortOrderInput;
    lastname?: SortOrderInput;
    role?: keyof typeof SortOrder;
    resetPasswordToken?: SortOrderInput;
    resetPasswordExpires?: SortOrderInput;
    companyId?: SortOrderInput;
    _count?: UserCountOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
}
