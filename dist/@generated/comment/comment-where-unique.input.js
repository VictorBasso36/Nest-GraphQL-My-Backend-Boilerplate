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
exports.CommentWhereUniqueInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const comment_where_input_1 = require("./comment-where.input");
const string_nullable_filter_input_1 = require("../prisma/string-nullable-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const float_nullable_filter_input_1 = require("../prisma/float-nullable-filter.input");
const bool_nullable_filter_input_1 = require("../prisma/bool-nullable-filter.input");
const company_nullable_relation_filter_input_1 = require("../company/company-nullable-relation-filter.input");
const user_nullable_relation_filter_input_1 = require("../user/user-nullable-relation-filter.input");
const comment_response_list_relation_filter_input_1 = require("../comment-response/comment-response-list-relation-filter.input");
let CommentWhereUniqueInput = exports.CommentWhereUniqueInput = class CommentWhereUniqueInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], CommentWhereUniqueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comment_where_input_1.CommentWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], CommentWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comment_where_input_1.CommentWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], CommentWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comment_where_input_1.CommentWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], CommentWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], CommentWhereUniqueInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], CommentWhereUniqueInput.prototype, "serviceType", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], CommentWhereUniqueInput.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], CommentWhereUniqueInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], CommentWhereUniqueInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => float_nullable_filter_input_1.FloatNullableFilter, { nullable: true }),
    __metadata("design:type", float_nullable_filter_input_1.FloatNullableFilter)
], CommentWhereUniqueInput.prototype, "rating", void 0);
__decorate([
    (0, graphql_1.Field)(() => bool_nullable_filter_input_1.BoolNullableFilter, { nullable: true }),
    __metadata("design:type", bool_nullable_filter_input_1.BoolNullableFilter)
], CommentWhereUniqueInput.prototype, "approved", void 0);
__decorate([
    (0, graphql_1.Field)(() => bool_nullable_filter_input_1.BoolNullableFilter, { nullable: true }),
    __metadata("design:type", bool_nullable_filter_input_1.BoolNullableFilter)
], CommentWhereUniqueInput.prototype, "removed", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], CommentWhereUniqueInput.prototype, "companyId", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], CommentWhereUniqueInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => company_nullable_relation_filter_input_1.CompanyNullableRelationFilter, { nullable: true }),
    __metadata("design:type", company_nullable_relation_filter_input_1.CompanyNullableRelationFilter)
], CommentWhereUniqueInput.prototype, "Company", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_nullable_relation_filter_input_1.UserNullableRelationFilter, { nullable: true }),
    __metadata("design:type", user_nullable_relation_filter_input_1.UserNullableRelationFilter)
], CommentWhereUniqueInput.prototype, "User", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_response_list_relation_filter_input_1.CommentResponseListRelationFilter, { nullable: true }),
    __metadata("design:type", comment_response_list_relation_filter_input_1.CommentResponseListRelationFilter)
], CommentWhereUniqueInput.prototype, "CommentResponse", void 0);
exports.CommentWhereUniqueInput = CommentWhereUniqueInput = __decorate([
    (0, graphql_2.InputType)()
], CommentWhereUniqueInput);
//# sourceMappingURL=comment-where-unique.input.js.map