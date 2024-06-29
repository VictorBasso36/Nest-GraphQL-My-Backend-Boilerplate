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
exports.CommentResponseOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const sort_order_input_1 = require("../prisma/sort-order.input");
const comment_response_count_order_by_aggregate_input_1 = require("./comment-response-count-order-by-aggregate.input");
const comment_response_max_order_by_aggregate_input_1 = require("./comment-response-max-order-by-aggregate.input");
const comment_response_min_order_by_aggregate_input_1 = require("./comment-response-min-order-by-aggregate.input");
let CommentResponseOrderByWithAggregationInput = exports.CommentResponseOrderByWithAggregationInput = class CommentResponseOrderByWithAggregationInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CommentResponseOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CommentResponseOrderByWithAggregationInput.prototype, "CommentId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true }),
    __metadata("design:type", sort_order_input_1.SortOrderInput)
], CommentResponseOrderByWithAggregationInput.prototype, "approved", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CommentResponseOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CommentResponseOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CommentResponseOrderByWithAggregationInput.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_response_count_order_by_aggregate_input_1.CommentResponseCountOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", comment_response_count_order_by_aggregate_input_1.CommentResponseCountOrderByAggregateInput)
], CommentResponseOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_response_max_order_by_aggregate_input_1.CommentResponseMaxOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", comment_response_max_order_by_aggregate_input_1.CommentResponseMaxOrderByAggregateInput)
], CommentResponseOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_response_min_order_by_aggregate_input_1.CommentResponseMinOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", comment_response_min_order_by_aggregate_input_1.CommentResponseMinOrderByAggregateInput)
], CommentResponseOrderByWithAggregationInput.prototype, "_min", void 0);
exports.CommentResponseOrderByWithAggregationInput = CommentResponseOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], CommentResponseOrderByWithAggregationInput);
//# sourceMappingURL=comment-response-order-by-with-aggregation.input.js.map