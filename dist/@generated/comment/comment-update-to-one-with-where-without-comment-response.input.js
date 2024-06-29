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
exports.CommentUpdateToOneWithWhereWithoutCommentResponseInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const comment_where_input_1 = require("./comment-where.input");
const class_transformer_1 = require("class-transformer");
const comment_update_without_comment_response_input_1 = require("./comment-update-without-comment-response.input");
let CommentUpdateToOneWithWhereWithoutCommentResponseInput = exports.CommentUpdateToOneWithWhereWithoutCommentResponseInput = class CommentUpdateToOneWithWhereWithoutCommentResponseInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => comment_where_input_1.CommentWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => comment_where_input_1.CommentWhereInput),
    __metadata("design:type", comment_where_input_1.CommentWhereInput)
], CommentUpdateToOneWithWhereWithoutCommentResponseInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_update_without_comment_response_input_1.CommentUpdateWithoutCommentResponseInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => comment_update_without_comment_response_input_1.CommentUpdateWithoutCommentResponseInput),
    __metadata("design:type", comment_update_without_comment_response_input_1.CommentUpdateWithoutCommentResponseInput)
], CommentUpdateToOneWithWhereWithoutCommentResponseInput.prototype, "data", void 0);
exports.CommentUpdateToOneWithWhereWithoutCommentResponseInput = CommentUpdateToOneWithWhereWithoutCommentResponseInput = __decorate([
    (0, graphql_2.InputType)()
], CommentUpdateToOneWithWhereWithoutCommentResponseInput);
//# sourceMappingURL=comment-update-to-one-with-where-without-comment-response.input.js.map