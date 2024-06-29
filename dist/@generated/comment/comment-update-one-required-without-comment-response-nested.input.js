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
exports.CommentUpdateOneRequiredWithoutCommentResponseNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const comment_create_without_comment_response_input_1 = require("./comment-create-without-comment-response.input");
const class_transformer_1 = require("class-transformer");
const comment_create_or_connect_without_comment_response_input_1 = require("./comment-create-or-connect-without-comment-response.input");
const comment_upsert_without_comment_response_input_1 = require("./comment-upsert-without-comment-response.input");
const client_1 = require("@prisma/client");
const comment_where_unique_input_1 = require("./comment-where-unique.input");
const comment_update_to_one_with_where_without_comment_response_input_1 = require("./comment-update-to-one-with-where-without-comment-response.input");
let CommentUpdateOneRequiredWithoutCommentResponseNestedInput = exports.CommentUpdateOneRequiredWithoutCommentResponseNestedInput = class CommentUpdateOneRequiredWithoutCommentResponseNestedInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => comment_create_without_comment_response_input_1.CommentCreateWithoutCommentResponseInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => comment_create_without_comment_response_input_1.CommentCreateWithoutCommentResponseInput),
    __metadata("design:type", comment_create_without_comment_response_input_1.CommentCreateWithoutCommentResponseInput)
], CommentUpdateOneRequiredWithoutCommentResponseNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_create_or_connect_without_comment_response_input_1.CommentCreateOrConnectWithoutCommentResponseInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => comment_create_or_connect_without_comment_response_input_1.CommentCreateOrConnectWithoutCommentResponseInput),
    __metadata("design:type", comment_create_or_connect_without_comment_response_input_1.CommentCreateOrConnectWithoutCommentResponseInput)
], CommentUpdateOneRequiredWithoutCommentResponseNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_upsert_without_comment_response_input_1.CommentUpsertWithoutCommentResponseInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => comment_upsert_without_comment_response_input_1.CommentUpsertWithoutCommentResponseInput),
    __metadata("design:type", comment_upsert_without_comment_response_input_1.CommentUpsertWithoutCommentResponseInput)
], CommentUpdateOneRequiredWithoutCommentResponseNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_where_unique_input_1.CommentWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => comment_where_unique_input_1.CommentWhereUniqueInput),
    __metadata("design:type", Object)
], CommentUpdateOneRequiredWithoutCommentResponseNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_update_to_one_with_where_without_comment_response_input_1.CommentUpdateToOneWithWhereWithoutCommentResponseInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => comment_update_to_one_with_where_without_comment_response_input_1.CommentUpdateToOneWithWhereWithoutCommentResponseInput),
    __metadata("design:type", comment_update_to_one_with_where_without_comment_response_input_1.CommentUpdateToOneWithWhereWithoutCommentResponseInput)
], CommentUpdateOneRequiredWithoutCommentResponseNestedInput.prototype, "update", void 0);
exports.CommentUpdateOneRequiredWithoutCommentResponseNestedInput = CommentUpdateOneRequiredWithoutCommentResponseNestedInput = __decorate([
    (0, graphql_2.InputType)()
], CommentUpdateOneRequiredWithoutCommentResponseNestedInput);
//# sourceMappingURL=comment-update-one-required-without-comment-response-nested.input.js.map