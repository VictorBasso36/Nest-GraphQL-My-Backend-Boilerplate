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
exports.UserUncheckedCreateWithoutCompanyInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const role_enum_1 = require("../prisma/role.enum");
const comment_unchecked_create_nested_many_without_user_input_1 = require("../comment/comment-unchecked-create-nested-many-without-user.input");
let UserUncheckedCreateWithoutCompanyInput = exports.UserUncheckedCreateWithoutCompanyInput = class UserUncheckedCreateWithoutCompanyInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UserUncheckedCreateWithoutCompanyInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], UserUncheckedCreateWithoutCompanyInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], UserUncheckedCreateWithoutCompanyInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], UserUncheckedCreateWithoutCompanyInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], UserUncheckedCreateWithoutCompanyInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UserUncheckedCreateWithoutCompanyInput.prototype, "firstname", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UserUncheckedCreateWithoutCompanyInput.prototype, "lastname", void 0);
__decorate([
    (0, graphql_1.Field)(() => role_enum_1.Role, { nullable: false }),
    __metadata("design:type", Object)
], UserUncheckedCreateWithoutCompanyInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UserUncheckedCreateWithoutCompanyInput.prototype, "resetPasswordToken", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], UserUncheckedCreateWithoutCompanyInput.prototype, "resetPasswordExpires", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_unchecked_create_nested_many_without_user_input_1.CommentUncheckedCreateNestedManyWithoutUserInput, { nullable: true }),
    __metadata("design:type", comment_unchecked_create_nested_many_without_user_input_1.CommentUncheckedCreateNestedManyWithoutUserInput)
], UserUncheckedCreateWithoutCompanyInput.prototype, "Comment", void 0);
exports.UserUncheckedCreateWithoutCompanyInput = UserUncheckedCreateWithoutCompanyInput = __decorate([
    (0, graphql_2.InputType)()
], UserUncheckedCreateWithoutCompanyInput);
//# sourceMappingURL=user-unchecked-create-without-company.input.js.map