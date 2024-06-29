import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumRoleFilter } from '../prisma/enum-role-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { CompanyNullableRelationFilter } from '../company/company-nullable-relation-filter.input';
import { CommentListRelationFilter } from '../comment/comment-list-relation-filter.input';
export declare class UserWhereInput {
    AND?: Array<UserWhereInput>;
    OR?: Array<UserWhereInput>;
    NOT?: Array<UserWhereInput>;
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
    Company?: CompanyNullableRelationFilter;
    Comment?: CommentListRelationFilter;
}
