import { CommentWhereInput } from './comment-where.input';
import { CommentOrderByWithRelationAndSearchRelevanceInput } from './comment-order-by-with-relation-and-search-relevance.input';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentScalarFieldEnum } from './comment-scalar-field.enum';
export declare class FindFirstCommentOrThrowArgs {
    where?: CommentWhereInput;
    orderBy?: Array<CommentOrderByWithRelationAndSearchRelevanceInput>;
    cursor?: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof CommentScalarFieldEnum>;
}
