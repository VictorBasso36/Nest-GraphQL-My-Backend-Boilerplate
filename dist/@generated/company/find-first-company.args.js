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
exports.FindFirstCompanyArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const company_where_input_1 = require("./company-where.input");
const class_transformer_1 = require("class-transformer");
const company_order_by_with_relation_and_search_relevance_input_1 = require("./company-order-by-with-relation-and-search-relevance.input");
const client_1 = require("@prisma/client");
const company_where_unique_input_1 = require("./company-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const company_scalar_field_enum_1 = require("./company-scalar-field.enum");
let FindFirstCompanyArgs = exports.FindFirstCompanyArgs = class FindFirstCompanyArgs {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => company_where_input_1.CompanyWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => company_where_input_1.CompanyWhereInput),
    __metadata("design:type", company_where_input_1.CompanyWhereInput)
], FindFirstCompanyArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [company_order_by_with_relation_and_search_relevance_input_1.CompanyOrderByWithRelationAndSearchRelevanceInput], { nullable: true }),
    __metadata("design:type", Array)
], FindFirstCompanyArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => company_where_unique_input_1.CompanyWhereUniqueInput, { nullable: true }),
    __metadata("design:type", Object)
], FindFirstCompanyArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindFirstCompanyArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindFirstCompanyArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [company_scalar_field_enum_1.CompanyScalarFieldEnum], { nullable: true }),
    __metadata("design:type", Array)
], FindFirstCompanyArgs.prototype, "distinct", void 0);
exports.FindFirstCompanyArgs = FindFirstCompanyArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindFirstCompanyArgs);
//# sourceMappingURL=find-first-company.args.js.map