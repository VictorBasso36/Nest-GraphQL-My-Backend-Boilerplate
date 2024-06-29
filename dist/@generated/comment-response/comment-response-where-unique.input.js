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
exports.CommentResponseWhereUniqueInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const comment_response_where_input_1 = require("./comment-response-where.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const bool_nullable_filter_input_1 = require("../prisma/bool-nullable-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const comment_relation_filter_input_1 = require("../comment/comment-relation-filter.input");
let CommentResponseWhereUniqueInput = exports.CommentResponseWhereUniqueInput = class CommentResponseWhereUniqueInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], CommentResponseWhereUniqueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comment_response_where_input_1.CommentResponseWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], CommentResponseWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comment_response_where_input_1.CommentResponseWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], CommentResponseWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comment_response_where_input_1.CommentResponseWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], CommentResponseWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], CommentResponseWhereUniqueInput.prototype, "CommentId", void 0);
__decorate([
    (0, graphql_1.Field)(() => bool_nullable_filter_input_1.BoolNullableFilter, { nullable: true }),
    __metadata("design:type", bool_nullable_filter_input_1.BoolNullableFilter)
], CommentResponseWhereUniqueInput.prototype, "approved", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], CommentResponseWhereUniqueInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], CommentResponseWhereUniqueInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], CommentResponseWhereUniqueInput.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_relation_filter_input_1.CommentRelationFilter, { nullable: true }),
    __metadata("design:type", comment_relation_filter_input_1.CommentRelationFilter)
], CommentResponseWhereUniqueInput.prototype, "Comment", void 0);
exports.CommentResponseWhereUniqueInput = CommentResponseWhereUniqueInput = __decorate([
    (0, graphql_2.InputType)()
], CommentResponseWhereUniqueInput);
//# sourceMappingURL=comment-response-where-unique.input.js.map