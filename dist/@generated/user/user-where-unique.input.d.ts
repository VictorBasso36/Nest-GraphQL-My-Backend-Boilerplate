import { UserWhereInput } from './user-where.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumRoleFilter } from '../prisma/enum-role-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { CompanyNullableRelationFilter } from '../company/company-nullable-relation-filter.input';
import { CommentListRelationFilter } from '../comment/comment-list-relation-filter.input';
export declare class UserWhereUniqueInput {
    id?: string;
    email?: string;
    resetPasswordToken?: string;
    AND?: Array<UserWhereInput>;
    OR?: Array<UserWhereInput>;
    NOT?: Array<UserWhereInput>;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    password?: StringFilter;
    firstname?: StringNullableFilter;
    lastname?: StringNullableFilter;
    role?: EnumRoleFilter;
    resetPasswordExpires?: DateTimeNullableFilter;
    companyId?: StringNullableFilter;
    Company?: CompanyNullableRelationFilter;
    Comment?: CommentListRelationFilter;
}
