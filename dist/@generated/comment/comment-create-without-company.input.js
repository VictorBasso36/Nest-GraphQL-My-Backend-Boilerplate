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
exports.CommentCreateWithoutCompanyInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const user_create_nested_one_without_comment_input_1 = require("../user/user-create-nested-one-without-comment.input");
const comment_response_create_nested_many_without_comment_input_1 = require("../comment-response/comment-response-create-nested-many-without-comment.input");
let CommentCreateWithoutCompanyInput = exports.CommentCreateWithoutCompanyInput = class CommentCreateWithoutCompanyInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], CommentCreateWithoutCompanyInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], CommentCreateWithoutCompanyInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], CommentCreateWithoutCompanyInput.prototype, "serviceType", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], CommentCreateWithoutCompanyInput.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], CommentCreateWithoutCompanyInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], CommentCreateWithoutCompanyInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    __metadata("design:type", Number)
], CommentCreateWithoutCompanyInput.prototype, "rating", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], CommentCreateWithoutCompanyInput.prototype, "approved", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], CommentCreateWithoutCompanyInput.prototype, "removed", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_create_nested_one_without_comment_input_1.UserCreateNestedOneWithoutCommentInput, { nullable: true }),
    __metadata("design:type", user_create_nested_one_without_comment_input_1.UserCreateNestedOneWithoutCommentInput)
], CommentCreateWithoutCompanyInput.prototype, "User", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_response_create_nested_many_without_comment_input_1.CommentResponseCreateNestedManyWithoutCommentInput, { nullable: true }),
    __metadata("design:type", comment_response_create_nested_many_without_comment_input_1.CommentResponseCreateNestedManyWithoutCommentInput)
], CommentCreateWithoutCompanyInput.prototype, "CommentResponse", void 0);
exports.CommentCreateWithoutCompanyInput = CommentCreateWithoutCompanyInput = __decorate([
    (0, graphql_2.InputType)()
], CommentCreateWithoutCompanyInput);
//# sourceMappingURL=comment-create-without-company.input.js.map