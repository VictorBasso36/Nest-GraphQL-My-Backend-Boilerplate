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
exports.CompanyWhereUniqueInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const company_where_input_1 = require("./company-where.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const string_nullable_filter_input_1 = require("../prisma/string-nullable-filter.input");
const bool_nullable_filter_input_1 = require("../prisma/bool-nullable-filter.input");
const int_nullable_filter_input_1 = require("../prisma/int-nullable-filter.input");
const float_nullable_filter_input_1 = require("../prisma/float-nullable-filter.input");
const user_list_relation_filter_input_1 = require("../user/user-list-relation-filter.input");
const comment_list_relation_filter_input_1 = require("../comment/comment-list-relation-filter.input");
let CompanyWhereUniqueInput = exports.CompanyWhereUniqueInput = class CompanyWhereUniqueInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], CompanyWhereUniqueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], CompanyWhereUniqueInput.prototype, "cnpj", void 0);
__decorate([
    (0, graphql_1.Field)(() => [company_where_input_1.CompanyWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], CompanyWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [company_where_input_1.CompanyWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], CompanyWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [company_where_input_1.CompanyWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], CompanyWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], CompanyWhereUniqueInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], CompanyWhereUniqueInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], CompanyWhereUniqueInput.prototype, "location", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], CompanyWhereUniqueInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], CompanyWhereUniqueInput.prototype, "urlImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], CompanyWhereUniqueInput.prototype, "working", void 0);
__decorate([
    (0, graphql_1.Field)(() => bool_nullable_filter_input_1.BoolNullableFilter, { nullable: true }),
    __metadata("design:type", bool_nullable_filter_input_1.BoolNullableFilter)
], CompanyWhereUniqueInput.prototype, "approved", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], CompanyWhereUniqueInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_nullable_filter_input_1.IntNullableFilter, { nullable: true }),
    __metadata("design:type", int_nullable_filter_input_1.IntNullableFilter)
], CompanyWhereUniqueInput.prototype, "ratingCount", void 0);
__decorate([
    (0, graphql_1.Field)(() => float_nullable_filter_input_1.FloatNullableFilter, { nullable: true }),
    __metadata("design:type", float_nullable_filter_input_1.FloatNullableFilter)
], CompanyWhereUniqueInput.prototype, "rating", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_list_relation_filter_input_1.UserListRelationFilter, { nullable: true }),
    __metadata("design:type", user_list_relation_filter_input_1.UserListRelationFilter)
], CompanyWhereUniqueInput.prototype, "User", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_list_relation_filter_input_1.CommentListRelationFilter, { nullable: true }),
    __metadata("design:type", comment_list_relation_filter_input_1.CommentListRelationFilter)
], CompanyWhereUniqueInput.prototype, "Comment", void 0);
exports.CompanyWhereUniqueInput = CompanyWhereUniqueInput = __decorate([
    (0, graphql_2.InputType)()
], CompanyWhereUniqueInput);
//# sourceMappingURL=company-where-unique.input.js.map