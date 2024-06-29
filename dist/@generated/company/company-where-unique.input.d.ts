import { CompanyWhereInput } from './company-where.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';
import { CommentListRelationFilter } from '../comment/comment-list-relation-filter.input';
export declare class CompanyWhereUniqueInput {
    id?: string;
    cnpj?: string;
    AND?: Array<CompanyWhereInput>;
    OR?: Array<CompanyWhereInput>;
    NOT?: Array<CompanyWhereInput>;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    location?: StringFilter;
    description?: StringNullableFilter;
    urlImage?: StringNullableFilter;
    working?: StringNullableFilter;
    approved?: BoolNullableFilter;
    name?: StringFilter;
    ratingCount?: IntNullableFilter;
    rating?: FloatNullableFilter;
    User?: UserListRelationFilter;
    Comment?: CommentListRelationFilter;
}
