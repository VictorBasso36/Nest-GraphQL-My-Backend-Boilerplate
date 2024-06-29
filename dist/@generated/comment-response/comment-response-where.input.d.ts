import { StringFilter } from '../prisma/string-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { CommentRelationFilter } from '../comment/comment-relation-filter.input';
export declare class CommentResponseWhereInput {
    AND?: Array<CommentResponseWhereInput>;
    OR?: Array<CommentResponseWhereInput>;
    NOT?: Array<CommentResponseWhereInput>;
    id?: StringFilter;
    CommentId?: StringFilter;
    approved?: BoolNullableFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    content?: StringFilter;
    Comment?: CommentRelationFilter;
}
