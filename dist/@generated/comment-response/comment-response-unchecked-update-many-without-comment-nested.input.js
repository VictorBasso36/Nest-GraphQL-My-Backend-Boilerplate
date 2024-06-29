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
exports.CommentResponseUncheckedUpdateManyWithoutCommentNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const comment_response_create_without_comment_input_1 = require("./comment-response-create-without-comment.input");
const class_transformer_1 = require("class-transformer");
const comment_response_create_or_connect_without_comment_input_1 = require("./comment-response-create-or-connect-without-comment.input");
const comment_response_upsert_with_where_unique_without_comment_input_1 = require("./comment-response-upsert-with-where-unique-without-comment.input");
const comment_response_create_many_comment_input_envelope_input_1 = require("./comment-response-create-many-comment-input-envelope.input");
const comment_response_where_unique_input_1 = require("./comment-response-where-unique.input");
const comment_response_update_with_where_unique_without_comment_input_1 = require("./comment-response-update-with-where-unique-without-comment.input");
const comment_response_update_many_with_where_without_comment_input_1 = require("./comment-response-update-many-with-where-without-comment.input");
const comment_response_scalar_where_input_1 = require("./comment-response-scalar-where.input");
let CommentResponseUncheckedUpdateManyWithoutCommentNestedInput = exports.CommentResponseUncheckedUpdateManyWithoutCommentNestedInput = class CommentResponseUncheckedUpdateManyWithoutCommentNestedInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => [comment_response_create_without_comment_input_1.CommentResponseCreateWithoutCommentInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => comment_response_create_without_comment_input_1.CommentResponseCreateWithoutCommentInput),
    __metadata("design:type", Array)
], CommentResponseUncheckedUpdateManyWithoutCommentNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comment_response_create_or_connect_without_comment_input_1.CommentResponseCreateOrConnectWithoutCommentInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => comment_response_create_or_connect_without_comment_input_1.CommentResponseCreateOrConnectWithoutCommentInput),
    __metadata("design:type", Array)
], CommentResponseUncheckedUpdateManyWithoutCommentNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comment_response_upsert_with_where_unique_without_comment_input_1.CommentResponseUpsertWithWhereUniqueWithoutCommentInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => comment_response_upsert_with_where_unique_without_comment_input_1.CommentResponseUpsertWithWhereUniqueWithoutCommentInput),
    __metadata("design:type", Array)
], CommentResponseUncheckedUpdateManyWithoutCommentNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_response_create_many_comment_input_envelope_input_1.CommentResponseCreateManyCommentInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => comment_response_create_many_comment_input_envelope_input_1.CommentResponseCreateManyCommentInputEnvelope),
    __metadata("design:type", comment_response_create_many_comment_input_envelope_input_1.CommentResponseCreateManyCommentInputEnvelope)
], CommentResponseUncheckedUpdateManyWithoutCommentNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comment_response_where_unique_input_1.CommentResponseWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => comment_response_where_unique_input_1.CommentResponseWhereUniqueInput),
    __metadata("design:type", Array)
], CommentResponseUncheckedUpdateManyWithoutCommentNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comment_response_where_unique_input_1.CommentResponseWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => comment_response_where_unique_input_1.CommentResponseWhereUniqueInput),
    __metadata("design:type", Array)
], CommentResponseUncheckedUpdateManyWithoutCommentNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comment_response_where_unique_input_1.CommentResponseWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => comment_response_where_unique_input_1.CommentResponseWhereUniqueInput),
    __metadata("design:type", Array)
], CommentResponseUncheckedUpdateManyWithoutCommentNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comment_response_where_unique_input_1.CommentResponseWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => comment_response_where_unique_input_1.CommentResponseWhereUniqueInput),
    __metadata("design:type", Array)
], CommentResponseUncheckedUpdateManyWithoutCommentNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comment_response_update_with_where_unique_without_comment_input_1.CommentResponseUpdateWithWhereUniqueWithoutCommentInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => comment_response_update_with_where_unique_without_comment_input_1.CommentResponseUpdateWithWhereUniqueWithoutCommentInput),
    __metadata("design:type", Array)
], CommentResponseUncheckedUpdateManyWithoutCommentNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comment_response_update_many_with_where_without_comment_input_1.CommentResponseUpdateManyWithWhereWithoutCommentInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => comment_response_update_many_with_where_without_comment_input_1.CommentResponseUpdateManyWithWhereWithoutCommentInput),
    __metadata("design:type", Array)
], CommentResponseUncheckedUpdateManyWithoutCommentNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comment_response_scalar_where_input_1.CommentResponseScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => comment_response_scalar_where_input_1.CommentResponseScalarWhereInput),
    __metadata("design:type", Array)
], CommentResponseUncheckedUpdateManyWithoutCommentNestedInput.prototype, "deleteMany", void 0);
exports.CommentResponseUncheckedUpdateManyWithoutCommentNestedInput = CommentResponseUncheckedUpdateManyWithoutCommentNestedInput = __decorate([
    (0, graphql_2.InputType)()
], CommentResponseUncheckedUpdateManyWithoutCommentNestedInput);
//# sourceMappingURL=comment-response-unchecked-update-many-without-comment-nested.input.js.map