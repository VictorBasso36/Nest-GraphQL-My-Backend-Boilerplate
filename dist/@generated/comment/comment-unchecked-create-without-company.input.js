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
exports.CommentUncheckedCreateWithoutCompanyInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const comment_response_unchecked_create_nested_many_without_comment_input_1 = require("../comment-response/comment-response-unchecked-create-nested-many-without-comment.input");
let CommentUncheckedCreateWithoutCompanyInput = exports.CommentUncheckedCreateWithoutCompanyInput = class CommentUncheckedCreateWithoutCompanyInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], CommentUncheckedCreateWithoutCompanyInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], CommentUncheckedCreateWithoutCompanyInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], CommentUncheckedCreateWithoutCompanyInput.prototype, "serviceType", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], CommentUncheckedCreateWithoutCompanyInput.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], CommentUncheckedCreateWithoutCompanyInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], CommentUncheckedCreateWithoutCompanyInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    __metadata("design:type", Number)
], CommentUncheckedCreateWithoutCompanyInput.prototype, "rating", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], CommentUncheckedCreateWithoutCompanyInput.prototype, "approved", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], CommentUncheckedCreateWithoutCompanyInput.prototype, "removed", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], CommentUncheckedCreateWithoutCompanyInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_response_unchecked_create_nested_many_without_comment_input_1.CommentResponseUncheckedCreateNestedManyWithoutCommentInput, { nullable: true }),
    __metadata("design:type", comment_response_unchecked_create_nested_many_without_comment_input_1.CommentResponseUncheckedCreateNestedManyWithoutCommentInput)
], CommentUncheckedCreateWithoutCompanyInput.prototype, "CommentResponse", void 0);
exports.CommentUncheckedCreateWithoutCompanyInput = CommentUncheckedCreateWithoutCompanyInput = __decorate([
    (0, graphql_2.InputType)()
], CommentUncheckedCreateWithoutCompanyInput);
//# sourceMappingURL=comment-unchecked-create-without-company.input.js.map