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
var NestedEnumRoleFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumRoleFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const role_enum_1 = require("./role.enum");
let NestedEnumRoleFilter = exports.NestedEnumRoleFilter = NestedEnumRoleFilter_1 = class NestedEnumRoleFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => role_enum_1.Role, { nullable: true }),
    __metadata("design:type", Object)
], NestedEnumRoleFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [role_enum_1.Role], { nullable: true }),
    __metadata("design:type", Array)
], NestedEnumRoleFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [role_enum_1.Role], { nullable: true }),
    __metadata("design:type", Array)
], NestedEnumRoleFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumRoleFilter_1, { nullable: true }),
    __metadata("design:type", NestedEnumRoleFilter)
], NestedEnumRoleFilter.prototype, "not", void 0);
exports.NestedEnumRoleFilter = NestedEnumRoleFilter = NestedEnumRoleFilter_1 = __decorate([
    (0, graphql_2.InputType)()
], NestedEnumRoleFilter);
//# sourceMappingURL=nested-enum-role-filter.input.js.map