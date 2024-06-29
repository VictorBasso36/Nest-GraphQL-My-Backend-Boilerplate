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
exports.FindManyUserArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_where_input_1 = require("./user-where.input");
const class_transformer_1 = require("class-transformer");
const user_order_by_with_relation_and_search_relevance_input_1 = require("./user-order-by-with-relation-and-search-relevance.input");
const client_1 = require("@prisma/client");
const user_where_unique_input_1 = require("./user-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const user_scalar_field_enum_1 = require("./user-scalar-field.enum");
let FindManyUserArgs = exports.FindManyUserArgs = class FindManyUserArgs {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => user_where_input_1.UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_where_input_1.UserWhereInput),
    __metadata("design:type", user_where_input_1.UserWhereInput)
], FindManyUserArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [user_order_by_with_relation_and_search_relevance_input_1.UserOrderByWithRelationAndSearchRelevanceInput], { nullable: true }),
    __metadata("design:type", Array)
], FindManyUserArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_where_unique_input_1.UserWhereUniqueInput, { nullable: true }),
    __metadata("design:type", Object)
], FindManyUserArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindManyUserArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindManyUserArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [user_scalar_field_enum_1.UserScalarFieldEnum], { nullable: true }),
    __metadata("design:type", Array)
], FindManyUserArgs.prototype, "distinct", void 0);
exports.FindManyUserArgs = FindManyUserArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindManyUserArgs);
//# sourceMappingURL=find-many-user.args.js.map