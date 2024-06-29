import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { EnumRoleWithAggregatesFilter } from '../prisma/enum-role-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
export declare class UserScalarWhereWithAggregatesInput {
    AND?: Array<UserScalarWhereWithAggregatesInput>;
    OR?: Array<UserScalarWhereWithAggregatesInput>;
    NOT?: Array<UserScalarWhereWithAggregatesInput>;
    id?: StringWithAggregatesFilter;
    createdAt?: DateTimeWithAggregatesFilter;
    updatedAt?: DateTimeWithAggregatesFilter;
    email?: StringWithAggregatesFilter;
    password?: StringWithAggregatesFilter;
    firstname?: StringNullableWithAggregatesFilter;
    lastname?: StringNullableWithAggregatesFilter;
    role?: EnumRoleWithAggregatesFilter;
    resetPasswordToken?: StringNullableWithAggregatesFilter;
    resetPasswordExpires?: DateTimeNullableWithAggregatesFilter;
    companyId?: StringNullableWithAggregatesFilter;
}
