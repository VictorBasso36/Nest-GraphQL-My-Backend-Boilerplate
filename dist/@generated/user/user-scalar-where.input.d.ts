import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumRoleFilter } from '../prisma/enum-role-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
export declare class UserScalarWhereInput {
    AND?: Array<UserScalarWhereInput>;
    OR?: Array<UserScalarWhereInput>;
    NOT?: Array<UserScalarWhereInput>;
    id?: StringFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    email?: StringFilter;
    password?: StringFilter;
    firstname?: StringNullableFilter;
    lastname?: StringNullableFilter;
    role?: EnumRoleFilter;
    resetPasswordToken?: StringNullableFilter;
    resetPasswordExpires?: DateTimeNullableFilter;
    companyId?: StringNullableFilter;
}
