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
exports.CompanyOrderByWithRelationAndSearchRelevanceInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const sort_order_input_1 = require("../prisma/sort-order.input");
const user_order_by_relation_aggregate_input_1 = require("../user/user-order-by-relation-aggregate.input");
const comment_order_by_relation_aggregate_input_1 = require("../comment/comment-order-by-relation-aggregate.input");
const company_order_by_relevance_input_1 = require("./company-order-by-relevance.input");
let CompanyOrderByWithRelationAndSearchRelevanceInput = exports.CompanyOrderByWithRelationAndSearchRelevanceInput = class CompanyOrderByWithRelationAndSearchRelevanceInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CompanyOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CompanyOrderByWithRelationAndSearchRelevanceInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CompanyOrderByWithRelationAndSearchRelevanceInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CompanyOrderByWithRelationAndSearchRelevanceInput.prototype, "cnpj", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CompanyOrderByWithRelationAndSearchRelevanceInput.prototype, "location", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true }),
    __metadata("design:type", sort_order_input_1.SortOrderInput)
], CompanyOrderByWithRelationAndSearchRelevanceInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true }),
    __metadata("design:type", sort_order_input_1.SortOrderInput)
], CompanyOrderByWithRelationAndSearchRelevanceInput.prototype, "urlImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true }),
    __metadata("design:type", sort_order_input_1.SortOrderInput)
], CompanyOrderByWithRelationAndSearchRelevanceInput.prototype, "working", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true }),
    __metadata("design:type", sort_order_input_1.SortOrderInput)
], CompanyOrderByWithRelationAndSearchRelevanceInput.prototype, "approved", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CompanyOrderByWithRelationAndSearchRelevanceInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true }),
    __metadata("design:type", sort_order_input_1.SortOrderInput)
], CompanyOrderByWithRelationAndSearchRelevanceInput.prototype, "ratingCount", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true }),
    __metadata("design:type", sort_order_input_1.SortOrderInput)
], CompanyOrderByWithRelationAndSearchRelevanceInput.prototype, "rating", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_order_by_relation_aggregate_input_1.UserOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", user_order_by_relation_aggregate_input_1.UserOrderByRelationAggregateInput)
], CompanyOrderByWithRelationAndSearchRelevanceInput.prototype, "User", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_order_by_relation_aggregate_input_1.CommentOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", comment_order_by_relation_aggregate_input_1.CommentOrderByRelationAggregateInput)
], CompanyOrderByWithRelationAndSearchRelevanceInput.prototype, "Comment", void 0);
__decorate([
    (0, graphql_1.Field)(() => company_order_by_relevance_input_1.CompanyOrderByRelevanceInput, { nullable: true }),
    __metadata("design:type", company_order_by_relevance_input_1.CompanyOrderByRelevanceInput)
], CompanyOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
exports.CompanyOrderByWithRelationAndSearchRelevanceInput = CompanyOrderByWithRelationAndSearchRelevanceInput = __decorate([
    (0, graphql_2.InputType)()
], CompanyOrderByWithRelationAndSearchRelevanceInput);
//# sourceMappingURL=company-order-by-with-relation-and-search-relevance.input.js.map