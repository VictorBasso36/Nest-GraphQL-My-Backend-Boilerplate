import { PrismaService } from 'nestjs-prisma';
import { CommentCreateInput } from 'src/@generated/comment/comment-create.input';
import { UpdateOneCommentArgs } from 'src/@generated/comment/update-one-comment.args';
import { FindManyCommentArgs } from 'src/@generated/comment/find-many-comment.args';
export declare class CommentResolver {
    private prisma;
    constructor(prisma: PrismaService);
    comments(args: FindManyCommentArgs): Promise<{
        pageInfo: {
            take: number;
            hasNextPage: boolean;
            hasPreviousPage: boolean;
            totalPages: number;
            totalItems: number;
            skip: number;
        };
        nodes: ({
            Company: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                cnpj: string;
                location: string;
                description: string;
                urlImage: string;
                working: string;
                approved: boolean;
                name: string;
                ratingCount: number;
                rating: number;
            };
            User: {
                Company: {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    cnpj: string;
                    location: string;
                    description: string;
                    urlImage: string;
                    working: string;
                    approved: boolean;
                    name: string;
                    ratingCount: number;
                    rating: number;
                };
            } & {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                email: string;
                password: string;
                firstname: string;
                lastname: string;
                role: import(".prisma/client").$Enums.Role;
                resetPasswordToken: string;
                resetPasswordExpires: Date;
                companyId: string;
            };
        } & {
            id: string;
            title: string;
            serviceType: string;
            content: string;
            createdAt: Date;
            updatedAt: Date;
            rating: number;
            approved: boolean;
            removed: boolean;
            companyId: string;
            userId: string;
        })[];
    }>;
    createComment(data: CommentCreateInput): Promise<{
        id: string;
        title: string;
        serviceType: string;
        content: string;
        createdAt: Date;
        updatedAt: Date;
        rating: number;
        approved: boolean;
        removed: boolean;
        companyId: string;
        userId: string;
    }>;
    updateComment(data: UpdateOneCommentArgs): Promise<{
        id: string;
        title: string;
        serviceType: string;
        content: string;
        createdAt: Date;
        updatedAt: Date;
        rating: number;
        approved: boolean;
        removed: boolean;
        companyId: string;
        userId: string;
    }>;
}
