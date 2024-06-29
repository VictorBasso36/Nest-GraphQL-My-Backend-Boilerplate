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
exports.CompanyUncheckedCreateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const graphql_4 = require("@nestjs/graphql");
const user_unchecked_create_nested_many_without_company_input_1 = require("../user/user-unchecked-create-nested-many-without-company.input");
const comment_unchecked_create_nested_many_without_company_input_1 = require("../comment/comment-unchecked-create-nested-many-without-company.input");
let CompanyUncheckedCreateInput = exports.CompanyUncheckedCreateInput = class CompanyUncheckedCreateInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], CompanyUncheckedCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], CompanyUncheckedCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], CompanyUncheckedCreateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], CompanyUncheckedCreateInput.prototype, "cnpj", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], CompanyUncheckedCreateInput.prototype, "location", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], CompanyUncheckedCreateInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], CompanyUncheckedCreateInput.prototype, "urlImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], CompanyUncheckedCreateInput.prototype, "working", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], CompanyUncheckedCreateInput.prototype, "approved", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], CompanyUncheckedCreateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], CompanyUncheckedCreateInput.prototype, "ratingCount", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Float, { nullable: true }),
    __metadata("design:type", Number)
], CompanyUncheckedCreateInput.prototype, "rating", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_unchecked_create_nested_many_without_company_input_1.UserUncheckedCreateNestedManyWithoutCompanyInput, { nullable: true }),
    __metadata("design:type", user_unchecked_create_nested_many_without_company_input_1.UserUncheckedCreateNestedManyWithoutCompanyInput)
], CompanyUncheckedCreateInput.prototype, "User", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_unchecked_create_nested_many_without_company_input_1.CommentUncheckedCreateNestedManyWithoutCompanyInput, { nullable: true }),
    __metadata("design:type", comment_unchecked_create_nested_many_without_company_input_1.CommentUncheckedCreateNestedManyWithoutCompanyInput)
], CompanyUncheckedCreateInput.prototype, "Comment", void 0);
exports.CompanyUncheckedCreateInput = CompanyUncheckedCreateInput = __decorate([
    (0, graphql_2.InputType)()
], CompanyUncheckedCreateInput);
//# sourceMappingURL=company-unchecked-create.input.js.map