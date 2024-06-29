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
var NestedBoolNullableFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedBoolNullableFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
let NestedBoolNullableFilter = exports.NestedBoolNullableFilter = NestedBoolNullableFilter_1 = class NestedBoolNullableFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], NestedBoolNullableFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedBoolNullableFilter_1, { nullable: true }),
    __metadata("design:type", NestedBoolNullableFilter)
], NestedBoolNullableFilter.prototype, "not", void 0);
exports.NestedBoolNullableFilter = NestedBoolNullableFilter = NestedBoolNullableFilter_1 = __decorate([
    (0, graphql_2.InputType)()
], NestedBoolNullableFilter);
//# sourceMappingURL=nested-bool-nullable-filter.input.js.map