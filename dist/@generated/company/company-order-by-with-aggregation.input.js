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
exports.CompanyOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const sort_order_input_1 = require("../prisma/sort-order.input");
const company_count_order_by_aggregate_input_1 = require("./company-count-order-by-aggregate.input");
const company_avg_order_by_aggregate_input_1 = require("./company-avg-order-by-aggregate.input");
const company_max_order_by_aggregate_input_1 = require("./company-max-order-by-aggregate.input");
const company_min_order_by_aggregate_input_1 = require("./company-min-order-by-aggregate.input");
const company_sum_order_by_aggregate_input_1 = require("./company-sum-order-by-aggregate.input");
let CompanyOrderByWithAggregationInput = exports.CompanyOrderByWithAggregationInput = class CompanyOrderByWithAggregationInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CompanyOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CompanyOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CompanyOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CompanyOrderByWithAggregationInput.prototype, "cnpj", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CompanyOrderByWithAggregationInput.prototype, "location", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true }),
    __metadata("design:type", sort_order_input_1.SortOrderInput)
], CompanyOrderByWithAggregationInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true }),
    __metadata("design:type", sort_order_input_1.SortOrderInput)
], CompanyOrderByWithAggregationInput.prototype, "urlImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true }),
    __metadata("design:type", sort_order_input_1.SortOrderInput)
], CompanyOrderByWithAggregationInput.prototype, "working", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true }),
    __metadata("design:type", sort_order_input_1.SortOrderInput)
], CompanyOrderByWithAggregationInput.prototype, "approved", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CompanyOrderByWithAggregationInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true }),
    __metadata("design:type", sort_order_input_1.SortOrderInput)
], CompanyOrderByWithAggregationInput.prototype, "ratingCount", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true }),
    __metadata("design:type", sort_order_input_1.SortOrderInput)
], CompanyOrderByWithAggregationInput.prototype, "rating", void 0);
__decorate([
    (0, graphql_1.Field)(() => company_count_order_by_aggregate_input_1.CompanyCountOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", company_count_order_by_aggregate_input_1.CompanyCountOrderByAggregateInput)
], CompanyOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => company_avg_order_by_aggregate_input_1.CompanyAvgOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", company_avg_order_by_aggregate_input_1.CompanyAvgOrderByAggregateInput)
], CompanyOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => company_max_order_by_aggregate_input_1.CompanyMaxOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", company_max_order_by_aggregate_input_1.CompanyMaxOrderByAggregateInput)
], CompanyOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => company_min_order_by_aggregate_input_1.CompanyMinOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", company_min_order_by_aggregate_input_1.CompanyMinOrderByAggregateInput)
], CompanyOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => company_sum_order_by_aggregate_input_1.CompanySumOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", company_sum_order_by_aggregate_input_1.CompanySumOrderByAggregateInput)
], CompanyOrderByWithAggregationInput.prototype, "_sum", void 0);
exports.CompanyOrderByWithAggregationInput = CompanyOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], CompanyOrderByWithAggregationInput);
//# sourceMappingURL=company-order-by-with-aggregation.input.js.map