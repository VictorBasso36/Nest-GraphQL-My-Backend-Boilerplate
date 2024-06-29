import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { CompanyNullableRelationFilter } from '../company/company-nullable-relation-filter.input';
import { UserNullableRelationFilter } from '../user/user-nullable-relation-filter.input';
import { CommentResponseListRelationFilter } from '../comment-response/comment-response-list-relation-filter.input';
export declare class CommentWhereInput {
    AND?: Array<CommentWhereInput>;
    OR?: Array<CommentWhereInput>;
    NOT?: Array<CommentWhereInput>;
    id?: StringFilter;
    title?: StringNullableFilter;
    serviceType?: StringNullableFilter;
    content?: StringFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    rating?: FloatNullableFilter;
    approved?: BoolNullableFilter;
    removed?: BoolNullableFilter;
    companyId?: StringNullableFilter;
    userId?: StringNullableFilter;
    Company?: CompanyNullableRelationFilter;
    User?: UserNullableRelationFilter;
    CommentResponse?: CommentResponseListRelationFilter;
}