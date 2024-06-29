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
var CommentResponseWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentResponseWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_filter_input_1 = require("../prisma/string-filter.input");
const bool_nullable_filter_input_1 = require("../prisma/bool-nullable-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const comment_relation_filter_input_1 = require("../comment/comment-relation-filter.input");
let CommentResponseWhereInput = exports.CommentResponseWhereInput = CommentResponseWhereInput_1 = class CommentResponseWhereInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => [CommentResponseWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], CommentResponseWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CommentResponseWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], CommentResponseWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CommentResponseWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], CommentResponseWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], CommentResponseWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], CommentResponseWhereInput.prototype, "CommentId", void 0);
__decorate([
    (0, graphql_1.Field)(() => bool_nullable_filter_input_1.BoolNullableFilter, { nullable: true }),
    __metadata("design:type", bool_nullable_filter_input_1.BoolNullableFilter)
], CommentResponseWhereInput.prototype, "approved", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], CommentResponseWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], CommentResponseWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], CommentResponseWhereInput.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_relation_filter_input_1.CommentRelationFilter, { nullable: true }),
    __metadata("design:type", comment_relation_filter_input_1.CommentRelationFilter)
], CommentResponseWhereInput.prototype, "Comment", void 0);
exports.CommentResponseWhereInput = CommentResponseWhereInput = CommentResponseWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], CommentResponseWhereInput);
//# sourceMappingURL=comment-response-where.input.js.map