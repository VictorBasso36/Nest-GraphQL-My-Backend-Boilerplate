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
var CompanyWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_filter_input_1 = require("../prisma/string-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const string_nullable_filter_input_1 = require("../prisma/string-nullable-filter.input");
const bool_nullable_filter_input_1 = require("../prisma/bool-nullable-filter.input");
const int_nullable_filter_input_1 = require("../prisma/int-nullable-filter.input");
const float_nullable_filter_input_1 = require("../prisma/float-nullable-filter.input");
const user_list_relation_filter_input_1 = require("../user/user-list-relation-filter.input");
const comment_list_relation_filter_input_1 = require("../comment/comment-list-relation-filter.input");
let CompanyWhereInput = exports.CompanyWhereInput = CompanyWhereInput_1 = class CompanyWhereInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => [CompanyWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], CompanyWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CompanyWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], CompanyWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CompanyWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], CompanyWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], CompanyWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], CompanyWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], CompanyWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], CompanyWhereInput.prototype, "cnpj", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], CompanyWhereInput.prototype, "location", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], CompanyWhereInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], CompanyWhereInput.prototype, "urlImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], CompanyWhereInput.prototype, "working", void 0);
__decorate([
    (0, graphql_1.Field)(() => bool_nullable_filter_input_1.BoolNullableFilter, { nullable: true }),
    __metadata("design:type", bool_nullable_filter_input_1.BoolNullableFilter)
], CompanyWhereInput.prototype, "approved", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], CompanyWhereInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_nullable_filter_input_1.IntNullableFilter, { nullable: true }),
    __metadata("design:type", int_nullable_filter_input_1.IntNullableFilter)
], CompanyWhereInput.prototype, "ratingCount", void 0);
__decorate([
    (0, graphql_1.Field)(() => float_nullable_filter_input_1.FloatNullableFilter, { nullable: true }),
    __metadata("design:type", float_nullable_filter_input_1.FloatNullableFilter)
], CompanyWhereInput.prototype, "rating", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_list_relation_filter_input_1.UserListRelationFilter, { nullable: true }),
    __metadata("design:type", user_list_relation_filter_input_1.UserListRelationFilter)
], CompanyWhereInput.prototype, "User", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_list_relation_filter_input_1.CommentListRelationFilter, { nullable: true }),
    __metadata("design:type", comment_list_relation_filter_input_1.CommentListRelationFilter)
], CompanyWhereInput.prototype, "Comment", void 0);
exports.CompanyWhereInput = CompanyWhereInput = CompanyWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], CompanyWhereInput);
//# sourceMappingURL=company-where.input.js.map