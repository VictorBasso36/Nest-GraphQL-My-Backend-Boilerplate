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
exports.CompanyCreateWithoutCommentInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const graphql_4 = require("@nestjs/graphql");
const user_create_nested_many_without_company_input_1 = require("../user/user-create-nested-many-without-company.input");
let CompanyCreateWithoutCommentInput = exports.CompanyCreateWithoutCommentInput = class CompanyCreateWithoutCommentInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], CompanyCreateWithoutCommentInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], CompanyCreateWithoutCommentInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], CompanyCreateWithoutCommentInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], CompanyCreateWithoutCommentInput.prototype, "cnpj", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], CompanyCreateWithoutCommentInput.prototype, "location", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], CompanyCreateWithoutCommentInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], CompanyCreateWithoutCommentInput.prototype, "urlImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], CompanyCreateWithoutCommentInput.prototype, "working", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], CompanyCreateWithoutCommentInput.prototype, "approved", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], CompanyCreateWithoutCommentInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], CompanyCreateWithoutCommentInput.prototype, "ratingCount", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Float, { nullable: true }),
    __metadata("design:type", Number)
], CompanyCreateWithoutCommentInput.prototype, "rating", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_create_nested_many_without_company_input_1.UserCreateNestedManyWithoutCompanyInput, { nullable: true }),
    __metadata("design:type", user_create_nested_many_without_company_input_1.UserCreateNestedManyWithoutCompanyInput)
], CompanyCreateWithoutCommentInput.prototype, "User", void 0);
exports.CompanyCreateWithoutCommentInput = CompanyCreateWithoutCommentInput = __decorate([
    (0, graphql_2.InputType)()
], CompanyCreateWithoutCommentInput);
//# sourceMappingURL=company-create-without-comment.input.js.map