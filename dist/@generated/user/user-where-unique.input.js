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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserWhereUniqueInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_where_input_1 = require("./user-where.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const string_nullable_filter_input_1 = require("../prisma/string-nullable-filter.input");
const enum_role_filter_input_1 = require("../prisma/enum-role-filter.input");
const date_time_nullable_filter_input_1 = require("../prisma/date-time-nullable-filter.input");
const company_nullable_relation_filter_input_1 = require("../company/company-nullable-relation-filter.input");
const comment_list_relation_filter_input_1 = require("../comment/comment-list-relation-filter.input");
let UserWhereUniqueInput = exports.UserWhereUniqueInput = class UserWhereUniqueInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UserWhereUniqueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UserWhereUniqueInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UserWhereUniqueInput.prototype, "resetPasswordToken", void 0);
__decorate([
    (0, graphql_1.Field)(() => [user_where_input_1.UserWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], UserWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [user_where_input_1.UserWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], UserWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [user_where_input_1.UserWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], UserWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], UserWhereUniqueInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], UserWhereUniqueInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], UserWhereUniqueInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], UserWhereUniqueInput.prototype, "firstname", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], UserWhereUniqueInput.prototype, "lastname", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_role_filter_input_1.EnumRoleFilter, { nullable: true }),
    __metadata("design:type", enum_role_filter_input_1.EnumRoleFilter)
], UserWhereUniqueInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_nullable_filter_input_1.DateTimeNullableFilter, { nullable: true }),
    __metadata("design:type", date_time_nullable_filter_input_1.DateTimeNullableFilter)
], UserWhereUniqueInput.prototype, "resetPasswordExpires", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], UserWhereUniqueInput.prototype, "companyId", void 0);
__decorate([
    (0, graphql_1.Field)(() => company_nullable_relation_filter_input_1.CompanyNullableRelationFilter, { nullable: true }),
    __metadata("design:type", company_nullable_relation_filter_input_1.CompanyNullableRelationFilter)
], UserWhereUniqueInput.prototype, "Company", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_list_relation_filter_input_1.CommentListRelationFilter, { nullable: true }),
    __metadata("design:type", comment_list_relation_filter_input_1.CommentListRelationFilter)
], UserWhereUniqueInput.prototype, "Comment", void 0);
exports.UserWhereUniqueInput = UserWhereUniqueInput = __decorate([
    (0, graphql_2.InputType)()
], UserWhereUniqueInput);
//# sourceMappingURL=user-where-unique.input.js.map