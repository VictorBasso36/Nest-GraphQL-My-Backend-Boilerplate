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
exports.Company = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const graphql_4 = require("@nestjs/graphql");
const graphql_5 = require("@nestjs/graphql");
const user_model_1 = require("../user/user.model");
const comment_model_1 = require("../comment/comment.model");
const company_count_output_1 = require("./company-count.output");
let Company = exports.Company = class Company {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false }),
    __metadata("design:type", String)
], Company.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], Company.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], Company.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], Company.prototype, "cnpj", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], Company.prototype, "location", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], Company.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], Company.prototype, "urlImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], Company.prototype, "working", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true, defaultValue: false }),
    __metadata("design:type", Boolean)
], Company.prototype, "approved", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], Company.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true, defaultValue: 0 }),
    __metadata("design:type", Number)
], Company.prototype, "ratingCount", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_5.Float, { nullable: true }),
    __metadata("design:type", Number)
], Company.prototype, "rating", void 0);
__decorate([
    (0, graphql_1.Field)(() => [user_model_1.User], { nullable: true }),
    __metadata("design:type", Array)
], Company.prototype, "User", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comment_model_1.Comment], { nullable: true }),
    __metadata("design:type", Array)
], Company.prototype, "Comment", void 0);
__decorate([
    (0, graphql_1.Field)(() => company_count_output_1.CompanyCount, { nullable: false }),
    __metadata("design:type", company_count_output_1.CompanyCount)
], Company.prototype, "_count", void 0);
exports.Company = Company = __decorate([
    (0, graphql_2.ObjectType)()
], Company);
//# sourceMappingURL=company.model.js.map