"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentResolver = void 0;
const nestjs_prisma_1 = require("nestjs-prisma");
const graphql_1 = require("@nestjs/graphql");
const gql_auth_guard_1 = require("../auth/gql-auth.guard");
const common_1 = require("@nestjs/common");
const comment_create_input_1 = require("../@generated/comment/comment-create.input");
const update_one_comment_args_1 = require("../@generated/comment/update-one-comment.args");
const find_many_comment_args_1 = require("../@generated/comment/find-many-comment.args");
const comment_model_1 = require("../@generated/comment/comment.model");
const find_many_comment_model_1 = require("./models/find-many-comment.model");
let CommentResolver = exports.CommentResolver = class CommentResolver {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async comments(args) {
        const take = args?.take || 10;
        const skip = args?.skip || 0;
        const totalItems = await this.prisma.comment.count({
            where: args?.where
        });
        const totalPages = Math.ceil(totalItems / take);
        const data = await this.prisma.comment.findMany({
            ...args,
            take,
            skip,
            include: {
                Company: true,
                User: {
                    include: {
                        Company: true
                    },
                }
            }
        });
        const hasNextPage = (skip + take) < totalItems;
        const hasPreviousPage = skip > 0;
        return {
            pageInfo: {
                take,
                hasNextPage,
                hasPreviousPage,
                totalPages,
                totalItems,
                skip,
            },
            nodes: data,
        };
    }
    async createComment(data) {
        const company = await this.prisma.company.findUniqueOrThrow({
            where: {
                id: data?.Company?.connect?.id
            }
        });
        let newRating = data?.rating;
        let newAverageRating = ((company?.rating * company?.ratingCount) + newRating) / (company?.ratingCount + 1);
        await this.prisma.company.update({
            where: {
                id: data?.Company?.connect?.id
            },
            data: {
                ratingCount: company?.ratingCount + 1,
                rating: newAverageRating
            }
        });
        return await this.prisma.comment.create({
            data: {
                ...data,
                approved: false
            },
        });
    }
    async updateComment(data) {
        return await this.prisma.comment.update({
            data: data?.data,
            where: data?.where
        });
    }
};
__decorate([
    (0, graphql_1.Query)(() => find_many_comment_model_1.CommentPaginatedModel, { nullable: true }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_many_comment_args_1.FindManyCommentArgs]),
    __metadata("design:returntype", Promise)
], CommentResolver.prototype, "comments", null);
__decorate([
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard),
    (0, graphql_1.Mutation)(() => comment_model_1.Comment, { name: 'createComment' }),
    __param(0, (0, graphql_1.Args)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [comment_create_input_1.CommentCreateInput]),
    __metadata("design:returntype", Promise)
], CommentResolver.prototype, "createComment", null);
__decorate([
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard),
    (0, graphql_1.Mutation)(() => comment_model_1.Comment, { name: 'updateComment' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_one_comment_args_1.UpdateOneCommentArgs]),
    __metadata("design:returntype", Promise)
], CommentResolver.prototype, "updateComment", null);
exports.CommentResolver = CommentResolver = __decorate([
    (0, graphql_1.Resolver)(() => comment_model_1.Comment),
    __metadata("design:paramtypes", [nestjs_prisma_1.PrismaService])
], CommentResolver);
//# sourceMappingURL=comment.resolver.js.map