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
var UserWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_filter_input_1 = require("../prisma/string-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const string_nullable_filter_input_1 = require("../prisma/string-nullable-filter.input");
const enum_role_filter_input_1 = require("../prisma/enum-role-filter.input");
const date_time_nullable_filter_input_1 = require("../prisma/date-time-nullable-filter.input");
const company_nullable_relation_filter_input_1 = require("../company/company-nullable-relation-filter.input");
const comment_list_relation_filter_input_1 = require("../comment/comment-list-relation-filter.input");
let UserWhereInput = exports.UserWhereInput = UserWhereInput_1 = class UserWhereInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => [UserWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], UserWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], UserWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], UserWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], UserWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], UserWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], UserWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], UserWhereInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], UserWhereInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], UserWhereInput.prototype, "firstname", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], UserWhereInput.prototype, "lastname", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_role_filter_input_1.EnumRoleFilter, { nullable: true }),
    __metadata("design:type", enum_role_filter_input_1.EnumRoleFilter)
], UserWhereInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], UserWhereInput.prototype, "resetPasswordToken", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_nullable_filter_input_1.DateTimeNullableFilter, { nullable: true }),
    __metadata("design:type", date_time_nullable_filter_input_1.DateTimeNullableFilter)
], UserWhereInput.prototype, "resetPasswordExpires", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], UserWhereInput.prototype, "companyId", void 0);
__decorate([
    (0, graphql_1.Field)(() => company_nullable_relation_filter_input_1.CompanyNullableRelationFilter, { nullable: true }),
    __metadata("design:type", company_nullable_relation_filter_input_1.CompanyNullableRelationFilter)
], UserWhereInput.prototype, "Company", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_list_relation_filter_input_1.CommentListRelationFilter, { nullable: true }),
    __metadata("design:type", comment_list_relation_filter_input_1.CommentListRelationFilter)
], UserWhereInput.prototype, "Comment", void 0);
exports.UserWhereInput = UserWhereInput = UserWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], UserWhereInput);
//# sourceMappingURL=user-where.input.js.map