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
exports.FloatNullableWithAggregatesFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const nested_float_nullable_with_aggregates_filter_input_1 = require("./nested-float-nullable-with-aggregates-filter.input");
const nested_int_nullable_filter_input_1 = require("./nested-int-nullable-filter.input");
const nested_float_nullable_filter_input_1 = require("./nested-float-nullable-filter.input");
let FloatNullableWithAggregatesFilter = exports.FloatNullableWithAggregatesFilter = class FloatNullableWithAggregatesFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    __metadata("design:type", Number)
], FloatNullableWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_3.Float], { nullable: true }),
    __metadata("design:type", Array)
], FloatNullableWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_3.Float], { nullable: true }),
    __metadata("design:type", Array)
], FloatNullableWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    __metadata("design:type", Number)
], FloatNullableWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    __metadata("design:type", Number)
], FloatNullableWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    __metadata("design:type", Number)
], FloatNullableWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    __metadata("design:type", Number)
], FloatNullableWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_float_nullable_with_aggregates_filter_input_1.NestedFloatNullableWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", nested_float_nullable_with_aggregates_filter_input_1.NestedFloatNullableWithAggregatesFilter)
], FloatNullableWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_int_nullable_filter_input_1.NestedIntNullableFilter, { nullable: true }),
    __metadata("design:type", nested_int_nullable_filter_input_1.NestedIntNullableFilter)
], FloatNullableWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_float_nullable_filter_input_1.NestedFloatNullableFilter, { nullable: true }),
    __metadata("design:type", nested_float_nullable_filter_input_1.NestedFloatNullableFilter)
], FloatNullableWithAggregatesFilter.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_float_nullable_filter_input_1.NestedFloatNullableFilter, { nullable: true }),
    __metadata("design:type", nested_float_nullable_filter_input_1.NestedFloatNullableFilter)
], FloatNullableWithAggregatesFilter.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_float_nullable_filter_input_1.NestedFloatNullableFilter, { nullable: true }),
    __metadata("design:type", nested_float_nullable_filter_input_1.NestedFloatNullableFilter)
], FloatNullableWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_float_nullable_filter_input_1.NestedFloatNullableFilter, { nullable: true }),
    __metadata("design:type", nested_float_nullable_filter_input_1.NestedFloatNullableFilter)
], FloatNullableWithAggregatesFilter.prototype, "_max", void 0);
exports.FloatNullableWithAggregatesFilter = FloatNullableWithAggregatesFilter = __decorate([
    (0, graphql_2.InputType)()
], FloatNullableWithAggregatesFilter);
//# sourceMappingURL=float-nullable-with-aggregates-filter.input.js.map