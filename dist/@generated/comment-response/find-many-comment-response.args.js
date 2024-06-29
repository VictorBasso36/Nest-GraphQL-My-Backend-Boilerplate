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
exports.FindManyCommentResponseArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const comment_response_where_input_1 = require("./comment-response-where.input");
const class_transformer_1 = require("class-transformer");
const comment_response_order_by_with_relation_and_search_relevance_input_1 = require("./comment-response-order-by-with-relation-and-search-relevance.input");
const client_1 = require("@prisma/client");
const comment_response_where_unique_input_1 = require("./comment-response-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const comment_response_scalar_field_enum_1 = require("./comment-response-scalar-field.enum");
let FindManyCommentResponseArgs = exports.FindManyCommentResponseArgs = class FindManyCommentResponseArgs {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => comment_response_where_input_1.CommentResponseWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => comment_response_where_input_1.CommentResponseWhereInput),
    __metadata("design:type", comment_response_where_input_1.CommentResponseWhereInput)
], FindManyCommentResponseArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comment_response_order_by_with_relation_and_search_relevance_input_1.CommentResponseOrderByWithRelationAndSearchRelevanceInput], { nullable: true }),
    __metadata("design:type", Array)
], FindManyCommentResponseArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_response_where_unique_input_1.CommentResponseWhereUniqueInput, { nullable: true }),
    __metadata("design:type", Object)
], FindManyCommentResponseArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindManyCommentResponseArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindManyCommentResponseArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comment_response_scalar_field_enum_1.CommentResponseScalarFieldEnum], { nullable: true }),
    __metadata("design:type", Array)
], FindManyCommentResponseArgs.prototype, "distinct", void 0);
exports.FindManyCommentResponseArgs = FindManyCommentResponseArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindManyCommentResponseArgs);
//# sourceMappingURL=find-many-comment-response.args.js.map