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
var NestedBoolNullableWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedBoolNullableWithAggregatesFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const nested_int_nullable_filter_input_1 = require("./nested-int-nullable-filter.input");
const nested_bool_nullable_filter_input_1 = require("./nested-bool-nullable-filter.input");
let NestedBoolNullableWithAggregatesFilter = exports.NestedBoolNullableWithAggregatesFilter = NestedBoolNullableWithAggregatesFilter_1 = class NestedBoolNullableWithAggregatesFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], NestedBoolNullableWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedBoolNullableWithAggregatesFilter_1, { nullable: true }),
    __metadata("design:type", NestedBoolNullableWithAggregatesFilter)
], NestedBoolNullableWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_int_nullable_filter_input_1.NestedIntNullableFilter, { nullable: true }),
    __metadata("design:type", nested_int_nullable_filter_input_1.NestedIntNullableFilter)
], NestedBoolNullableWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_bool_nullable_filter_input_1.NestedBoolNullableFilter, { nullable: true }),
    __metadata("design:type", nested_bool_nullable_filter_input_1.NestedBoolNullableFilter)
], NestedBoolNullableWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_bool_nullable_filter_input_1.NestedBoolNullableFilter, { nullable: true }),
    __metadata("design:type", nested_bool_nullable_filter_input_1.NestedBoolNullableFilter)
], NestedBoolNullableWithAggregatesFilter.prototype, "_max", void 0);
exports.NestedBoolNullableWithAggregatesFilter = NestedBoolNullableWithAggregatesFilter = NestedBoolNullableWithAggregatesFilter_1 = __decorate([
    (0, graphql_2.InputType)()
], NestedBoolNullableWithAggregatesFilter);
//# sourceMappingURL=nested-bool-nullable-with-aggregates-filter.input.js.map