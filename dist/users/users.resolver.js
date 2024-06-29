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
exports.UsersResolver = void 0;
const nestjs_prisma_1 = require("nestjs-prisma");
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const user_decorator_1 = require("../common/decorators/user.decorator");
const gql_auth_guard_1 = require("../auth/gql-auth.guard");
const users_service_1 = require("./users.service");
const user_model_1 = require("../@generated/user/user.model");
const change_password_input_1 = require("./dto/change-password.input");
const update_user_input_1 = require("./dto/update-user.input");
let UsersResolver = exports.UsersResolver = class UsersResolver {
    constructor(usersService, prisma) {
        this.usersService = usersService;
        this.prisma = prisma;
    }
    async me(user) {
        return user;
    }
    async updateUser(user, newUserData) {
        return this.usersService.updateUser(user.id, newUserData);
    }
    async changePassword(user, changePassword) {
        return this.usersService.changePassword(user.id, user.password, changePassword);
    }
};
__decorate([
    (0, graphql_1.Query)(() => user_model_1.User),
    __param(0, (0, user_decorator_1.UserEntity)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_model_1.User]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "me", null);
__decorate([
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard),
    (0, graphql_1.Mutation)(() => user_model_1.User),
    __param(0, (0, user_decorator_1.UserEntity)()),
    __param(1, (0, graphql_1.Args)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_model_1.User,
        update_user_input_1.UpdateUserInput]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "updateUser", null);
__decorate([
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard),
    (0, graphql_1.Mutation)(() => user_model_1.User),
    __param(0, (0, user_decorator_1.UserEntity)()),
    __param(1, (0, graphql_1.Args)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_model_1.User,
        change_password_input_1.ChangePasswordInput]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "changePassword", null);
exports.UsersResolver = UsersResolver = __decorate([
    (0, graphql_1.Resolver)(() => user_model_1.User),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        nestjs_prisma_1.PrismaService])
], UsersResolver);
//# sourceMappingURL=users.resolver.js.map