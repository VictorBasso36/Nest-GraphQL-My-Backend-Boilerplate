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
exports.CompanyUncheckedCreateWithoutCommentInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const graphql_4 = require("@nestjs/graphql");
const user_unchecked_create_nested_many_without_company_input_1 = require("../user/user-unchecked-create-nested-many-without-company.input");
let CompanyUncheckedCreateWithoutCommentInput = exports.CompanyUncheckedCreateWithoutCommentInput = class CompanyUncheckedCreateWithoutCommentInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], CompanyUncheckedCreateWithoutCommentInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], CompanyUncheckedCreateWithoutCommentInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], CompanyUncheckedCreateWithoutCommentInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], CompanyUncheckedCreateWithoutCommentInput.prototype, "cnpj", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], CompanyUncheckedCreateWithoutCommentInput.prototype, "location", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], CompanyUncheckedCreateWithoutCommentInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], CompanyUncheckedCreateWithoutCommentInput.prototype, "urlImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], CompanyUncheckedCreateWithoutCommentInput.prototype, "working", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], CompanyUncheckedCreateWithoutCommentInput.prototype, "approved", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], CompanyUncheckedCreateWithoutCommentInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], CompanyUncheckedCreateWithoutCommentInput.prototype, "ratingCount", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Float, { nullable: true }),
    __metadata("design:type", Number)
], CompanyUncheckedCreateWithoutCommentInput.prototype, "rating", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_unchecked_create_nested_many_without_company_input_1.UserUncheckedCreateNestedManyWithoutCompanyInput, { nullable: true }),
    __metadata("design:type", user_unchecked_create_nested_many_without_company_input_1.UserUncheckedCreateNestedManyWithoutCompanyInput)
], CompanyUncheckedCreateWithoutCommentInput.prototype, "User", void 0);
exports.CompanyUncheckedCreateWithoutCommentInput = CompanyUncheckedCreateWithoutCommentInput = __decorate([
    (0, graphql_2.InputType)()
], CompanyUncheckedCreateWithoutCommentInput);
//# sourceMappingURL=company-unchecked-create-without-comment.input.js.map