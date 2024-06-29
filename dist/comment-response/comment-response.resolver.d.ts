import { PrismaService } from 'nestjs-prisma';
import { CommentResponseCreateInput } from 'src/@generated/comment-response/comment-response-create.input';
import { UpdateOneCommentResponseArgs } from 'src/@generated/comment-response/update-one-comment-response.args';
import { FindManyCommentResponseArgs } from 'src/@generated/comment-response/find-many-comment-response.args';
export declare class CommentResponseResolver {
    private prisma;
    constructor(prisma: PrismaService);
    CommentResponses(args: FindManyCommentResponseArgs): Promise<{
        pageInfo: {
            take: number;
            hasNextPage: boolean;
            hasPreviousPage: boolean;
            totalPages: number;
            totalItems: number;
            skip: number;
        };
        nodes: {
            id: string;
            CommentId: string;
            approved: boolean;
            createdAt: Date;
            updatedAt: Date;
            content: string;
        }[];
    }>;
    createCommentResponse(data: CommentResponseCreateInput): Promise<{
        id: string;
        CommentId: string;
        approved: boolean;
        createdAt: Date;
        updatedAt: Date;
        content: string;
    }>;
    updateCommentResponse(data: UpdateOneCommentResponseArgs): Promise<{
        id: string;
        CommentId: string;
        approved: boolean;
        createdAt: Date;
        updatedAt: Date;
        content: string;
    }>;
}
