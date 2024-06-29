import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { BoolNullableWithAggregatesFilter } from '../prisma/bool-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
export declare class CommentResponseScalarWhereWithAggregatesInput {
    AND?: Array<CommentResponseScalarWhereWithAggregatesInput>;
    OR?: Array<CommentResponseScalarWhereWithAggregatesInput>;
    NOT?: Array<CommentResponseScalarWhereWithAggregatesInput>;
    id?: StringWithAggregatesFilter;
    CommentId?: StringWithAggregatesFilter;
    approved?: BoolNullableWithAggregatesFilter;
    createdAt?: DateTimeWithAggregatesFilter;
    updatedAt?: DateTimeWithAggregatesFilter;
    content?: StringWithAggregatesFilter;
}
