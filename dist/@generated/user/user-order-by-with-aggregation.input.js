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
exports.UserOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const sort_order_input_1 = require("../prisma/sort-order.input");
const user_count_order_by_aggregate_input_1 = require("./user-count-order-by-aggregate.input");
const user_max_order_by_aggregate_input_1 = require("./user-max-order-by-aggregate.input");
const user_min_order_by_aggregate_input_1 = require("./user-min-order-by-aggregate.input");
let UserOrderByWithAggregationInput = exports.UserOrderByWithAggregationInput = class UserOrderByWithAggregationInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], UserOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], UserOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], UserOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], UserOrderByWithAggregationInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], UserOrderByWithAggregationInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true }),
    __metadata("design:type", sort_order_input_1.SortOrderInput)
], UserOrderByWithAggregationInput.prototype, "firstname", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true }),
    __metadata("design:type", sort_order_input_1.SortOrderInput)
], UserOrderByWithAggregationInput.prototype, "lastname", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], UserOrderByWithAggregationInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true }),
    __metadata("design:type", sort_order_input_1.SortOrderInput)
], UserOrderByWithAggregationInput.prototype, "resetPasswordToken", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true }),
    __metadata("design:type", sort_order_input_1.SortOrderInput)
], UserOrderByWithAggregationInput.prototype, "resetPasswordExpires", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true }),
    __metadata("design:type", sort_order_input_1.SortOrderInput)
], UserOrderByWithAggregationInput.prototype, "companyId", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_count_order_by_aggregate_input_1.UserCountOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", user_count_order_by_aggregate_input_1.UserCountOrderByAggregateInput)
], UserOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_max_order_by_aggregate_input_1.UserMaxOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", user_max_order_by_aggregate_input_1.UserMaxOrderByAggregateInput)
], UserOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_min_order_by_aggregate_input_1.UserMinOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", user_min_order_by_aggregate_input_1.UserMinOrderByAggregateInput)
], UserOrderByWithAggregationInput.prototype, "_min", void 0);
exports.UserOrderByWithAggregationInput = UserOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], UserOrderByWithAggregationInput);
//# sourceMappingURL=user-order-by-with-aggregation.input.js.map