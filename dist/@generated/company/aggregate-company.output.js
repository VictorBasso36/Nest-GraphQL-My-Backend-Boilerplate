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
exports.AggregateCompany = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const company_count_aggregate_output_1 = require("./company-count-aggregate.output");
const company_avg_aggregate_output_1 = require("./company-avg-aggregate.output");
const company_sum_aggregate_output_1 = require("./company-sum-aggregate.output");
const company_min_aggregate_output_1 = require("./company-min-aggregate.output");
const company_max_aggregate_output_1 = require("./company-max-aggregate.output");
let AggregateCompany = exports.AggregateCompany = class AggregateCompany {
};
__decorate([
    (0, graphql_1.Field)(() => company_count_aggregate_output_1.CompanyCountAggregate, { nullable: true }),
    __metadata("design:type", company_count_aggregate_output_1.CompanyCountAggregate)
], AggregateCompany.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => company_avg_aggregate_output_1.CompanyAvgAggregate, { nullable: true }),
    __metadata("design:type", company_avg_aggregate_output_1.CompanyAvgAggregate)
], AggregateCompany.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => company_sum_aggregate_output_1.CompanySumAggregate, { nullable: true }),
    __metadata("design:type", company_sum_aggregate_output_1.CompanySumAggregate)
], AggregateCompany.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => company_min_aggregate_output_1.CompanyMinAggregate, { nullable: true }),
    __metadata("design:type", company_min_aggregate_output_1.CompanyMinAggregate)
], AggregateCompany.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => company_max_aggregate_output_1.CompanyMaxAggregate, { nullable: true }),
    __metadata("design:type", company_max_aggregate_output_1.CompanyMaxAggregate)
], AggregateCompany.prototype, "_max", void 0);
exports.AggregateCompany = AggregateCompany = __decorate([
    (0, graphql_2.ObjectType)()
], AggregateCompany);
//# sourceMappingURL=aggregate-company.output.js.map