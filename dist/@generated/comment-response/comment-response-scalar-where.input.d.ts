import { StringFilter } from '../prisma/string-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
export declare class CommentResponseScalarWhereInput {
    AND?: Array<CommentResponseScalarWhereInput>;
    OR?: Array<CommentResponseScalarWhereInput>;
    NOT?: Array<CommentResponseScalarWhereInput>;
    id?: StringFilter;
    CommentId?: StringFilter;
    approved?: BoolNullableFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    content?: StringFilter;
}
