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
exports.CommentOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const sort_order_input_1 = require("../prisma/sort-order.input");
const comment_count_order_by_aggregate_input_1 = require("./comment-count-order-by-aggregate.input");
const comment_avg_order_by_aggregate_input_1 = require("./comment-avg-order-by-aggregate.input");
const comment_max_order_by_aggregate_input_1 = require("./comment-max-order-by-aggregate.input");
const comment_min_order_by_aggregate_input_1 = require("./comment-min-order-by-aggregate.input");
const comment_sum_order_by_aggregate_input_1 = require("./comment-sum-order-by-aggregate.input");
let CommentOrderByWithAggregationInput = exports.CommentOrderByWithAggregationInput = class CommentOrderByWithAggregationInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CommentOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true }),
    __metadata("design:type", sort_order_input_1.SortOrderInput)
], CommentOrderByWithAggregationInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true }),
    __metadata("design:type", sort_order_input_1.SortOrderInput)
], CommentOrderByWithAggregationInput.prototype, "serviceType", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CommentOrderByWithAggregationInput.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CommentOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CommentOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true }),
    __metadata("design:type", sort_order_input_1.SortOrderInput)
], CommentOrderByWithAggregationInput.prototype, "rating", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true }),
    __metadata("design:type", sort_order_input_1.SortOrderInput)
], CommentOrderByWithAggregationInput.prototype, "approved", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true }),
    __metadata("design:type", sort_order_input_1.SortOrderInput)
], CommentOrderByWithAggregationInput.prototype, "removed", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true }),
    __metadata("design:type", sort_order_input_1.SortOrderInput)
], CommentOrderByWithAggregationInput.prototype, "companyId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true }),
    __metadata("design:type", sort_order_input_1.SortOrderInput)
], CommentOrderByWithAggregationInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_count_order_by_aggregate_input_1.CommentCountOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", comment_count_order_by_aggregate_input_1.CommentCountOrderByAggregateInput)
], CommentOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_avg_order_by_aggregate_input_1.CommentAvgOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", comment_avg_order_by_aggregate_input_1.CommentAvgOrderByAggregateInput)
], CommentOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_max_order_by_aggregate_input_1.CommentMaxOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", comment_max_order_by_aggregate_input_1.CommentMaxOrderByAggregateInput)
], CommentOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_min_order_by_aggregate_input_1.CommentMinOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", comment_min_order_by_aggregate_input_1.CommentMinOrderByAggregateInput)
], CommentOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_sum_order_by_aggregate_input_1.CommentSumOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", comment_sum_order_by_aggregate_input_1.CommentSumOrderByAggregateInput)
], CommentOrderByWithAggregationInput.prototype, "_sum", void 0);
exports.CommentOrderByWithAggregationInput = CommentOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], CommentOrderByWithAggregationInput);
//# sourceMappingURL=comment-order-by-with-aggregation.input.js.map