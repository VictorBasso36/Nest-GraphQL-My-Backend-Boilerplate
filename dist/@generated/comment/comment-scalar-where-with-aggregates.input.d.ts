import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { FloatNullableWithAggregatesFilter } from '../prisma/float-nullable-with-aggregates-filter.input';
import { BoolNullableWithAggregatesFilter } from '../prisma/bool-nullable-with-aggregates-filter.input';
export declare class CommentScalarWhereWithAggregatesInput {
    AND?: Array<CommentScalarWhereWithAggregatesInput>;
    OR?: Array<CommentScalarWhereWithAggregatesInput>;
    NOT?: Array<CommentScalarWhereWithAggregatesInput>;
    id?: StringWithAggregatesFilter;
    title?: StringNullableWithAggregatesFilter;
    serviceType?: StringNullableWithAggregatesFilter;
    content?: StringWithAggregatesFilter;
    createdAt?: DateTimeWithAggregatesFilter;
    updatedAt?: DateTimeWithAggregatesFilter;
    rating?: FloatNullableWithAggregatesFilter;
    approved?: BoolNullableWithAggregatesFilter;
    removed?: BoolNullableWithAggregatesFilter;
    companyId?: StringNullableWithAggregatesFilter;
    userId?: StringNullableWithAggregatesFilter;
}
