import { SortOrder } from '../prisma/sort-order.enum';
export declare class UserCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    email?: keyof typeof SortOrder;
    password?: keyof typeof SortOrder;
    firstname?: keyof typeof SortOrder;
    lastname?: keyof typeof SortOrder;
    role?: keyof typeof SortOrder;
    resetPasswordToken?: keyof typeof SortOrder;
    resetPasswordExpires?: keyof typeof SortOrder;
    companyId?: keyof typeof SortOrder;
}
