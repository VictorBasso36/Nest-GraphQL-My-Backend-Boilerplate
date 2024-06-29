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
exports.UserUncheckedCreateWithoutCommentInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const role_enum_1 = require("../prisma/role.enum");
let UserUncheckedCreateWithoutCommentInput = exports.UserUncheckedCreateWithoutCommentInput = class UserUncheckedCreateWithoutCommentInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UserUncheckedCreateWithoutCommentInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], UserUncheckedCreateWithoutCommentInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], UserUncheckedCreateWithoutCommentInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], UserUncheckedCreateWithoutCommentInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], UserUncheckedCreateWithoutCommentInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UserUncheckedCreateWithoutCommentInput.prototype, "firstname", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UserUncheckedCreateWithoutCommentInput.prototype, "lastname", void 0);
__decorate([
    (0, graphql_1.Field)(() => role_enum_1.Role, { nullable: false }),
    __metadata("design:type", Object)
], UserUncheckedCreateWithoutCommentInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UserUncheckedCreateWithoutCommentInput.prototype, "resetPasswordToken", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], UserUncheckedCreateWithoutCommentInput.prototype, "resetPasswordExpires", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UserUncheckedCreateWithoutCommentInput.prototype, "companyId", void 0);
exports.UserUncheckedCreateWithoutCommentInput = UserUncheckedCreateWithoutCommentInput = __decorate([
    (0, graphql_2.InputType)()
], UserUncheckedCreateWithoutCommentInput);
//# sourceMappingURL=user-unchecked-create-without-comment.input.js.map