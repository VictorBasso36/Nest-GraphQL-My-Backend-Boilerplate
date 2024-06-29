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
exports.CompanyGroupBy = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const graphql_4 = require("@nestjs/graphql");
const company_count_aggregate_output_1 = require("./company-count-aggregate.output");
const company_avg_aggregate_output_1 = require("./company-avg-aggregate.output");
const company_sum_aggregate_output_1 = require("./company-sum-aggregate.output");
const company_min_aggregate_output_1 = require("./company-min-aggregate.output");
const company_max_aggregate_output_1 = require("./company-max-aggregate.output");
let CompanyGroupBy = exports.CompanyGroupBy = class CompanyGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], CompanyGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], CompanyGroupBy.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], CompanyGroupBy.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], CompanyGroupBy.prototype, "cnpj", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], CompanyGroupBy.prototype, "location", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], CompanyGroupBy.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], CompanyGroupBy.prototype, "urlImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], CompanyGroupBy.prototype, "working", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], CompanyGroupBy.prototype, "approved", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], CompanyGroupBy.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], CompanyGroupBy.prototype, "ratingCount", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Float, { nullable: true }),
    __metadata("design:type", Number)
], CompanyGroupBy.prototype, "rating", void 0);
__decorate([
    (0, graphql_1.Field)(() => company_count_aggregate_output_1.CompanyCountAggregate, { nullable: true }),
    __metadata("design:type", company_count_aggregate_output_1.CompanyCountAggregate)
], CompanyGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => company_avg_aggregate_output_1.CompanyAvgAggregate, { nullable: true }),
    __metadata("design:type", company_avg_aggregate_output_1.CompanyAvgAggregate)
], CompanyGroupBy.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => company_sum_aggregate_output_1.CompanySumAggregate, { nullable: true }),
    __metadata("design:type", company_sum_aggregate_output_1.CompanySumAggregate)
], CompanyGroupBy.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => company_min_aggregate_output_1.CompanyMinAggregate, { nullable: true }),
    __metadata("design:type", company_min_aggregate_output_1.CompanyMinAggregate)
], CompanyGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => company_max_aggregate_output_1.CompanyMaxAggregate, { nullable: true }),
    __metadata("design:type", company_max_aggregate_output_1.CompanyMaxAggregate)
], CompanyGroupBy.prototype, "_max", void 0);
exports.CompanyGroupBy = CompanyGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], CompanyGroupBy);
//# sourceMappingURL=company-group-by.output.js.map