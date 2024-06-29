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
exports.CompanyResolver = void 0;
const nestjs_prisma_1 = require("nestjs-prisma");
const graphql_1 = require("@nestjs/graphql");
const company_create_input_1 = require("../@generated/company/company-create.input");
const update_one_company_args_1 = require("../@generated/company/update-one-company.args");
const find_unique_company_args_1 = require("../@generated/company/find-unique-company.args");
const company_model_1 = require("../@generated/company/company.model");
const find_many_model_1 = require("./models/find-many.model");
const find_many_company_args_1 = require("../@generated/company/find-many-company.args");
const gql_auth_guard_1 = require("../auth/gql-auth.guard");
const common_1 = require("@nestjs/common");
const user_decorator_1 = require("../common/decorators/user.decorator");
const user_model_1 = require("../@generated/user/user.model");
let CompanyResolver = exports.CompanyResolver = class CompanyResolver {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async companys(args) {
        const take = args?.take || 10;
        const skip = args?.skip || 0;
        const totalItems = await this.prisma.company.count({
            where: {
                approved: true
            }
        });
        const totalPages = Math.ceil(totalItems / take);
        const data = await this.prisma.company.findMany({
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
    async findOne(args) {
        return await this.prisma.company.findUnique({
            include: {
                User: true
            },
            where: args.where
        });
    }
    async createCompony(data) {
        return await this.prisma.company.create({
            data: {
                ...data,
                approved: false,
                ratingCount: 0,
                rating: 0,
            },
        });
    }
    async updateCompony(data, user) {
        const company = await this.prisma.company.findUniqueOrThrow({
            where: data?.where,
            include: {
                User: true
            }
        });
        console.log(user?.companyId);
        console.log(company?.id);
        if (user?.companyId !== company?.id)
            throw 'esse usuario nn pertence a essa empresa';
        return await this.prisma.company.update({
            data: {
                ...data?.data,
                approved: company?.approved,
                rating: company?.rating,
                ratingCount: company?.ratingCount
            },
            where: data?.where
        });
    }
};
__decorate([
    (0, graphql_1.Query)(() => find_many_model_1.CompanyPaginatedModel, { nullable: true }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_many_company_args_1.FindManyCompanyArgs]),
    __metadata("design:returntype", Promise)
], CompanyResolver.prototype, "companys", null);
__decorate([
    (0, graphql_1.Query)(() => company_model_1.Company, { nullable: true, name: 'findUniqueCompany' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_unique_company_args_1.FindUniqueCompanyArgs]),
    __metadata("design:returntype", Promise)
], CompanyResolver.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard),
    (0, graphql_1.Mutation)(() => company_model_1.Company, { name: 'createCompany' }),
    __param(0, (0, graphql_1.Args)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [company_create_input_1.CompanyCreateInput]),
    __metadata("design:returntype", Promise)
], CompanyResolver.prototype, "createCompony", null);
__decorate([
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard),
    (0, graphql_1.Mutation)(() => company_model_1.Company, { name: 'updateCompany' }),
    __param(0, (0, graphql_1.Args)()),
    __param(1, (0, user_decorator_1.UserEntity)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_one_company_args_1.UpdateOneCompanyArgs, user_model_1.User]),
    __metadata("design:returntype", Promise)
], CompanyResolver.prototype, "updateCompony", null);
exports.CompanyResolver = CompanyResolver = __decorate([
    (0, graphql_1.Resolver)(() => company_model_1.Company),
    __metadata("design:paramtypes", [nestjs_prisma_1.PrismaService])
], CompanyResolver);
//# sourceMappingURL=company.resolver.js.map