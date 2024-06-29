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
exports.UserCreateWithoutCommentInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const role_enum_1 = require("../prisma/role.enum");
const company_create_nested_one_without_user_input_1 = require("../company/company-create-nested-one-without-user.input");
let UserCreateWithoutCommentInput = exports.UserCreateWithoutCommentInput = class UserCreateWithoutCommentInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UserCreateWithoutCommentInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], UserCreateWithoutCommentInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], UserCreateWithoutCommentInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], UserCreateWithoutCommentInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], UserCreateWithoutCommentInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UserCreateWithoutCommentInput.prototype, "firstname", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UserCreateWithoutCommentInput.prototype, "lastname", void 0);
__decorate([
    (0, graphql_1.Field)(() => role_enum_1.Role, { nullable: false }),
    __metadata("design:type", Object)
], UserCreateWithoutCommentInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UserCreateWithoutCommentInput.prototype, "resetPasswordToken", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], UserCreateWithoutCommentInput.prototype, "resetPasswordExpires", void 0);
__decorate([
    (0, graphql_1.Field)(() => company_create_nested_one_without_user_input_1.CompanyCreateNestedOneWithoutUserInput, { nullable: true }),
    __metadata("design:type", company_create_nested_one_without_user_input_1.CompanyCreateNestedOneWithoutUserInput)
], UserCreateWithoutCommentInput.prototype, "Company", void 0);
exports.UserCreateWithoutCommentInput = UserCreateWithoutCommentInput = __decorate([
    (0, graphql_2.InputType)()
], UserCreateWithoutCommentInput);
//# sourceMappingURL=user-create-without-comment.input.js.map