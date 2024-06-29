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
exports.CommentResponseCreateWithoutCommentInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
let CommentResponseCreateWithoutCommentInput = exports.CommentResponseCreateWithoutCommentInput = class CommentResponseCreateWithoutCommentInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], CommentResponseCreateWithoutCommentInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], CommentResponseCreateWithoutCommentInput.prototype, "approved", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], CommentResponseCreateWithoutCommentInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], CommentResponseCreateWithoutCommentInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], CommentResponseCreateWithoutCommentInput.prototype, "content", void 0);
exports.CommentResponseCreateWithoutCommentInput = CommentResponseCreateWithoutCommentInput = __decorate([
    (0, graphql_2.InputType)()
], CommentResponseCreateWithoutCommentInput);
//# sourceMappingURL=comment-response-create-without-comment.input.js.map