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
exports.CommentResponseResolver = void 0;
const nestjs_prisma_1 = require("nestjs-prisma");
const graphql_1 = require("@nestjs/graphql");
const comment_response_create_input_1 = require("../@generated/comment-response/comment-response-create.input");
const update_one_comment_response_args_1 = require("../@generated/comment-response/update-one-comment-response.args");
const find_many_comment_response_args_1 = require("../@generated/comment-response/find-many-comment-response.args");
const comment_response_model_1 = require("../@generated/comment-response/comment-response.model");
const find_many_comment_response_model_1 = require("./models/find-many-comment-response.model");
const gql_auth_guard_1 = require("../auth/gql-auth.guard");
const common_1 = require("@nestjs/common");
let CommentResponseResolver = exports.CommentResponseResolver = class CommentResponseResolver {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async CommentResponses(args) {
        const take = args?.take || 10;
        const skip = args?.skip || 0;
        const totalItems = await this.prisma.commentResponse.count();
        const totalPages = Math.ceil(totalItems / take);
        const data = await this.prisma.commentResponse.findMany({
            ...args,
            take,
            skip,
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
    async createCommentResponse(data) {
        return await this.prisma.commentResponse.create({
            data: {
                ...data,
                approved: false
            },
        });
    }
    async updateCommentResponse(data) {
        return await this.prisma.commentResponse.update({
            data: data?.data,
            where: data?.where
        });
    }
};
__decorate([
    (0, graphql_1.Query)(() => find_many_comment_response_model_1.CommentResponsePaginatedModel, { nullable: true }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_many_comment_response_args_1.FindManyCommentResponseArgs]),
    __metadata("design:returntype", Promise)
], CommentResponseResolver.prototype, "CommentResponses", null);
__decorate([
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard),
    (0, graphql_1.Mutation)(() => comment_response_model_1.CommentResponse, { name: 'createComment' }),
    __param(0, (0, graphql_1.Args)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [comment_response_create_input_1.CommentResponseCreateInput]),
    __metadata("design:returntype", Promise)
], CommentResponseResolver.prototype, "createCommentResponse", null);
__decorate([
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard),
    (0, graphql_1.Mutation)(() => comment_response_model_1.CommentResponse, { name: 'updateCommentResponse' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_one_comment_response_args_1.UpdateOneCommentResponseArgs]),
    __metadata("design:returntype", Promise)
], CommentResponseResolver.prototype, "updateCommentResponse", null);
exports.CommentResponseResolver = CommentResponseResolver = __decorate([
    (0, graphql_1.Resolver)(() => comment_response_model_1.CommentResponse),
    __metadata("design:paramtypes", [nestjs_prisma_1.PrismaService])
], CommentResponseResolver);
//# sourceMappingURL=comment-response.resolver.js.map