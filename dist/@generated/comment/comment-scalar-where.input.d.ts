import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
export declare class CommentScalarWhereInput {
    AND?: Array<CommentScalarWhereInput>;
    OR?: Array<CommentScalarWhereInput>;
    NOT?: Array<CommentScalarWhereInput>;
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
}
