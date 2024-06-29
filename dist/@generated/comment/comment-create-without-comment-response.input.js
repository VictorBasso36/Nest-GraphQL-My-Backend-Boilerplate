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
exports.CommentCreateWithoutCommentResponseInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const company_create_nested_one_without_comment_input_1 = require("../company/company-create-nested-one-without-comment.input");
const user_create_nested_one_without_comment_input_1 = require("../user/user-create-nested-one-without-comment.input");
let CommentCreateWithoutCommentResponseInput = exports.CommentCreateWithoutCommentResponseInput = class CommentCreateWithoutCommentResponseInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], CommentCreateWithoutCommentResponseInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], CommentCreateWithoutCommentResponseInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], CommentCreateWithoutCommentResponseInput.prototype, "serviceType", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], CommentCreateWithoutCommentResponseInput.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], CommentCreateWithoutCommentResponseInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], CommentCreateWithoutCommentResponseInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    __metadata("design:type", Number)
], CommentCreateWithoutCommentResponseInput.prototype, "rating", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], CommentCreateWithoutCommentResponseInput.prototype, "approved", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], CommentCreateWithoutCommentResponseInput.prototype, "removed", void 0);
__decorate([
    (0, graphql_1.Field)(() => company_create_nested_one_without_comment_input_1.CompanyCreateNestedOneWithoutCommentInput, { nullable: true }),
    __metadata("design:type", company_create_nested_one_without_comment_input_1.CompanyCreateNestedOneWithoutCommentInput)
], CommentCreateWithoutCommentResponseInput.prototype, "Company", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_create_nested_one_without_comment_input_1.UserCreateNestedOneWithoutCommentInput, { nullable: true }),
    __metadata("design:type", user_create_nested_one_without_comment_input_1.UserCreateNestedOneWithoutCommentInput)
], CommentCreateWithoutCommentResponseInput.prototype, "User", void 0);
exports.CommentCreateWithoutCommentResponseInput = CommentCreateWithoutCommentResponseInput = __decorate([
    (0, graphql_2.InputType)()
], CommentCreateWithoutCommentResponseInput);
//# sourceMappingURL=comment-create-without-comment-response.input.js.map