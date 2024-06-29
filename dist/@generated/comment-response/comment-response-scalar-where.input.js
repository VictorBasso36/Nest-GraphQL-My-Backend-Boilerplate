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
var CommentResponseScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentResponseScalarWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_filter_input_1 = require("../prisma/string-filter.input");
const bool_nullable_filter_input_1 = require("../prisma/bool-nullable-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
let CommentResponseScalarWhereInput = exports.CommentResponseScalarWhereInput = CommentResponseScalarWhereInput_1 = class CommentResponseScalarWhereInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => [CommentResponseScalarWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], CommentResponseScalarWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CommentResponseScalarWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], CommentResponseScalarWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CommentResponseScalarWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], CommentResponseScalarWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], CommentResponseScalarWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], CommentResponseScalarWhereInput.prototype, "CommentId", void 0);
__decorate([
    (0, graphql_1.Field)(() => bool_nullable_filter_input_1.BoolNullableFilter, { nullable: true }),
    __metadata("design:type", bool_nullable_filter_input_1.BoolNullableFilter)
], CommentResponseScalarWhereInput.prototype, "approved", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], CommentResponseScalarWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], CommentResponseScalarWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], CommentResponseScalarWhereInput.prototype, "content", void 0);
exports.CommentResponseScalarWhereInput = CommentResponseScalarWhereInput = CommentResponseScalarWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], CommentResponseScalarWhereInput);
//# sourceMappingURL=comment-response-scalar-where.input.js.map