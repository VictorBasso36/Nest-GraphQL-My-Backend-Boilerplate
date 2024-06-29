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
exports.UserOrderByWithRelationAndSearchRelevanceInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const sort_order_input_1 = require("../prisma/sort-order.input");
const company_order_by_with_relation_and_search_relevance_input_1 = require("../company/company-order-by-with-relation-and-search-relevance.input");
const comment_order_by_relation_aggregate_input_1 = require("../comment/comment-order-by-relation-aggregate.input");
const user_order_by_relevance_input_1 = require("./user-order-by-relevance.input");
let UserOrderByWithRelationAndSearchRelevanceInput = exports.UserOrderByWithRelationAndSearchRelevanceInput = class UserOrderByWithRelationAndSearchRelevanceInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], UserOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], UserOrderByWithRelationAndSearchRelevanceInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], UserOrderByWithRelationAndSearchRelevanceInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], UserOrderByWithRelationAndSearchRelevanceInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], UserOrderByWithRelationAndSearchRelevanceInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true }),
    __metadata("design:type", sort_order_input_1.SortOrderInput)
], UserOrderByWithRelationAndSearchRelevanceInput.prototype, "firstname", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true }),
    __metadata("design:type", sort_order_input_1.SortOrderInput)
], UserOrderByWithRelationAndSearchRelevanceInput.prototype, "lastname", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], UserOrderByWithRelationAndSearchRelevanceInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true }),
    __metadata("design:type", sort_order_input_1.SortOrderInput)
], UserOrderByWithRelationAndSearchRelevanceInput.prototype, "resetPasswordToken", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true }),
    __metadata("design:type", sort_order_input_1.SortOrderInput)
], UserOrderByWithRelationAndSearchRelevanceInput.prototype, "resetPasswordExpires", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true }),
    __metadata("design:type", sort_order_input_1.SortOrderInput)
], UserOrderByWithRelationAndSearchRelevanceInput.prototype, "companyId", void 0);
__decorate([
    (0, graphql_1.Field)(() => company_order_by_with_relation_and_search_relevance_input_1.CompanyOrderByWithRelationAndSearchRelevanceInput, { nullable: true }),
    __metadata("design:type", company_order_by_with_relation_and_search_relevance_input_1.CompanyOrderByWithRelationAndSearchRelevanceInput)
], UserOrderByWithRelationAndSearchRelevanceInput.prototype, "Company", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_order_by_relation_aggregate_input_1.CommentOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", comment_order_by_relation_aggregate_input_1.CommentOrderByRelationAggregateInput)
], UserOrderByWithRelationAndSearchRelevanceInput.prototype, "Comment", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_order_by_relevance_input_1.UserOrderByRelevanceInput, { nullable: true }),
    __metadata("design:type", user_order_by_relevance_input_1.UserOrderByRelevanceInput)
], UserOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
exports.UserOrderByWithRelationAndSearchRelevanceInput = UserOrderByWithRelationAndSearchRelevanceInput = __decorate([
    (0, graphql_2.InputType)()
], UserOrderByWithRelationAndSearchRelevanceInput);
//# sourceMappingURL=user-order-by-with-relation-and-search-relevance.input.js.map