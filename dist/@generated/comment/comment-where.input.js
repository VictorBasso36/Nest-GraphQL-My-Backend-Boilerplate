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
var CommentWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_filter_input_1 = require("../prisma/string-filter.input");
const string_nullable_filter_input_1 = require("../prisma/string-nullable-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const float_nullable_filter_input_1 = require("../prisma/float-nullable-filter.input");
const bool_nullable_filter_input_1 = require("../prisma/bool-nullable-filter.input");
const company_nullable_relation_filter_input_1 = require("../company/company-nullable-relation-filter.input");
const user_nullable_relation_filter_input_1 = require("../user/user-nullable-relation-filter.input");
const comment_response_list_relation_filter_input_1 = require("../comment-response/comment-response-list-relation-filter.input");
let CommentWhereInput = exports.CommentWhereInput = CommentWhereInput_1 = class CommentWhereInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => [CommentWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], CommentWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CommentWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], CommentWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CommentWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], CommentWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], CommentWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], CommentWhereInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], CommentWhereInput.prototype, "serviceType", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], CommentWhereInput.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], CommentWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], CommentWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => float_nullable_filter_input_1.FloatNullableFilter, { nullable: true }),
    __metadata("design:type", float_nullable_filter_input_1.FloatNullableFilter)
], CommentWhereInput.prototype, "rating", void 0);
__decorate([
    (0, graphql_1.Field)(() => bool_nullable_filter_input_1.BoolNullableFilter, { nullable: true }),
    __metadata("design:type", bool_nullable_filter_input_1.BoolNullableFilter)
], CommentWhereInput.prototype, "approved", void 0);
__decorate([
    (0, graphql_1.Field)(() => bool_nullable_filter_input_1.BoolNullableFilter, { nullable: true }),
    __metadata("design:type", bool_nullable_filter_input_1.BoolNullableFilter)
], CommentWhereInput.prototype, "removed", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], CommentWhereInput.prototype, "companyId", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], CommentWhereInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => company_nullable_relation_filter_input_1.CompanyNullableRelationFilter, { nullable: true }),
    __metadata("design:type", company_nullable_relation_filter_input_1.CompanyNullableRelationFilter)
], CommentWhereInput.prototype, "Company", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_nullable_relation_filter_input_1.UserNullableRelationFilter, { nullable: true }),
    __metadata("design:type", user_nullable_relation_filter_input_1.UserNullableRelationFilter)
], CommentWhereInput.prototype, "User", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_response_list_relation_filter_input_1.CommentResponseListRelationFilter, { nullable: true }),
    __metadata("design:type", comment_response_list_relation_filter_input_1.CommentResponseListRelationFilter)
], CommentWhereInput.prototype, "CommentResponse", void 0);
exports.CommentWhereInput = CommentWhereInput = CommentWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], CommentWhereInput);
//# sourceMappingURL=comment-where.input.js.map