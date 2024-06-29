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
exports.CommentResponseOrderByWithRelationAndSearchRelevanceInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const sort_order_input_1 = require("../prisma/sort-order.input");
const comment_order_by_with_relation_and_search_relevance_input_1 = require("../comment/comment-order-by-with-relation-and-search-relevance.input");
const comment_response_order_by_relevance_input_1 = require("./comment-response-order-by-relevance.input");
let CommentResponseOrderByWithRelationAndSearchRelevanceInput = exports.CommentResponseOrderByWithRelationAndSearchRelevanceInput = class CommentResponseOrderByWithRelationAndSearchRelevanceInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CommentResponseOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CommentResponseOrderByWithRelationAndSearchRelevanceInput.prototype, "CommentId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true }),
    __metadata("design:type", sort_order_input_1.SortOrderInput)
], CommentResponseOrderByWithRelationAndSearchRelevanceInput.prototype, "approved", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CommentResponseOrderByWithRelationAndSearchRelevanceInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CommentResponseOrderByWithRelationAndSearchRelevanceInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CommentResponseOrderByWithRelationAndSearchRelevanceInput.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_order_by_with_relation_and_search_relevance_input_1.CommentOrderByWithRelationAndSearchRelevanceInput, { nullable: true }),
    __metadata("design:type", comment_order_by_with_relation_and_search_relevance_input_1.CommentOrderByWithRelationAndSearchRelevanceInput)
], CommentResponseOrderByWithRelationAndSearchRelevanceInput.prototype, "Comment", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_response_order_by_relevance_input_1.CommentResponseOrderByRelevanceInput, { nullable: true }),
    __metadata("design:type", comment_response_order_by_relevance_input_1.CommentResponseOrderByRelevanceInput)
], CommentResponseOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
exports.CommentResponseOrderByWithRelationAndSearchRelevanceInput = CommentResponseOrderByWithRelationAndSearchRelevanceInput = __decorate([
    (0, graphql_2.InputType)()
], CommentResponseOrderByWithRelationAndSearchRelevanceInput);
//# sourceMappingURL=comment-response-order-by-with-relation-and-search-relevance.input.js.map