import { CommentResponseWhereInput } from './comment-response-where.input';
import { CommentResponseOrderByWithRelationAndSearchRelevanceInput } from './comment-response-order-by-with-relation-and-search-relevance.input';
import { Prisma } from '@prisma/client';
import { CommentResponseWhereUniqueInput } from './comment-response-where-unique.input';
import { CommentResponseScalarFieldEnum } from './comment-response-scalar-field.enum';
export declare class FindManyCommentResponseArgs {
    where?: CommentResponseWhereInput;
    orderBy?: Array<CommentResponseOrderByWithRelationAndSearchRelevanceInput>;
    cursor?: Prisma.AtLeast<CommentResponseWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof CommentResponseScalarFieldEnum>;
}
