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
exports.CompanyAggregateArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const company_where_input_1 = require("./company-where.input");
const class_transformer_1 = require("class-transformer");
const company_order_by_with_relation_and_search_relevance_input_1 = require("./company-order-by-with-relation-and-search-relevance.input");
const client_1 = require("@prisma/client");
const company_where_unique_input_1 = require("./company-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const company_count_aggregate_input_1 = require("./company-count-aggregate.input");
const company_avg_aggregate_input_1 = require("./company-avg-aggregate.input");
const company_sum_aggregate_input_1 = require("./company-sum-aggregate.input");
const company_min_aggregate_input_1 = require("./company-min-aggregate.input");
const company_max_aggregate_input_1 = require("./company-max-aggregate.input");
let CompanyAggregateArgs = exports.CompanyAggregateArgs = class CompanyAggregateArgs {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => company_where_input_1.CompanyWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => company_where_input_1.CompanyWhereInput),
    __metadata("design:type", company_where_input_1.CompanyWhereInput)
], CompanyAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [company_order_by_with_relation_and_search_relevance_input_1.CompanyOrderByWithRelationAndSearchRelevanceInput], { nullable: true }),
    __metadata("design:type", Array)
], CompanyAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => company_where_unique_input_1.CompanyWhereUniqueInput, { nullable: true }),
    __metadata("design:type", Object)
], CompanyAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], CompanyAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], CompanyAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => company_count_aggregate_input_1.CompanyCountAggregateInput, { nullable: true }),
    __metadata("design:type", company_count_aggregate_input_1.CompanyCountAggregateInput)
], CompanyAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => company_avg_aggregate_input_1.CompanyAvgAggregateInput, { nullable: true }),
    __metadata("design:type", company_avg_aggregate_input_1.CompanyAvgAggregateInput)
], CompanyAggregateArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => company_sum_aggregate_input_1.CompanySumAggregateInput, { nullable: true }),
    __metadata("design:type", company_sum_aggregate_input_1.CompanySumAggregateInput)
], CompanyAggregateArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => company_min_aggregate_input_1.CompanyMinAggregateInput, { nullable: true }),
    __metadata("design:type", company_min_aggregate_input_1.CompanyMinAggregateInput)
], CompanyAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => company_max_aggregate_input_1.CompanyMaxAggregateInput, { nullable: true }),
    __metadata("design:type", company_max_aggregate_input_1.CompanyMaxAggregateInput)
], CompanyAggregateArgs.prototype, "_max", void 0);
exports.CompanyAggregateArgs = CompanyAggregateArgs = __decorate([
    (0, graphql_2.ArgsType)()
], CompanyAggregateArgs);
//# sourceMappingURL=company-aggregate.args.js.map