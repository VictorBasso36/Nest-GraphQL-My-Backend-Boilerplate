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
exports.FindFirstCommentOrThrowArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const comment_where_input_1 = require("./comment-where.input");
const class_transformer_1 = require("class-transformer");
const comment_order_by_with_relation_and_search_relevance_input_1 = require("./comment-order-by-with-relation-and-search-relevance.input");
const client_1 = require("@prisma/client");
const comment_where_unique_input_1 = require("./comment-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const comment_scalar_field_enum_1 = require("./comment-scalar-field.enum");
let FindFirstCommentOrThrowArgs = exports.FindFirstCommentOrThrowArgs = class FindFirstCommentOrThrowArgs {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => comment_where_input_1.CommentWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => comment_where_input_1.CommentWhereInput),
    __metadata("design:type", comment_where_input_1.CommentWhereInput)
], FindFirstCommentOrThrowArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comment_order_by_with_relation_and_search_relevance_input_1.CommentOrderByWithRelationAndSearchRelevanceInput], { nullable: true }),
    __metadata("design:type", Array)
], FindFirstCommentOrThrowArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_where_unique_input_1.CommentWhereUniqueInput, { nullable: true }),
    __metadata("design:type", Object)
], FindFirstCommentOrThrowArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindFirstCommentOrThrowArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindFirstCommentOrThrowArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comment_scalar_field_enum_1.CommentScalarFieldEnum], { nullable: true }),
    __metadata("design:type", Array)
], FindFirstCommentOrThrowArgs.prototype, "distinct", void 0);
exports.FindFirstCommentOrThrowArgs = FindFirstCommentOrThrowArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindFirstCommentOrThrowArgs);
//# sourceMappingURL=find-first-comment-or-throw.args.js.map