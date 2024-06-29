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
exports.CommentResponseUncheckedCreateNestedManyWithoutCommentInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const comment_response_create_without_comment_input_1 = require("./comment-response-create-without-comment.input");
const class_transformer_1 = require("class-transformer");
const comment_response_create_or_connect_without_comment_input_1 = require("./comment-response-create-or-connect-without-comment.input");
const comment_response_create_many_comment_input_envelope_input_1 = require("./comment-response-create-many-comment-input-envelope.input");
const comment_response_where_unique_input_1 = require("./comment-response-where-unique.input");
let CommentResponseUncheckedCreateNestedManyWithoutCommentInput = exports.CommentResponseUncheckedCreateNestedManyWithoutCommentInput = class CommentResponseUncheckedCreateNestedManyWithoutCommentInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => [comment_response_create_without_comment_input_1.CommentResponseCreateWithoutCommentInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => comment_response_create_without_comment_input_1.CommentResponseCreateWithoutCommentInput),
    __metadata("design:type", Array)
], CommentResponseUncheckedCreateNestedManyWithoutCommentInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comment_response_create_or_connect_without_comment_input_1.CommentResponseCreateOrConnectWithoutCommentInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => comment_response_create_or_connect_without_comment_input_1.CommentResponseCreateOrConnectWithoutCommentInput),
    __metadata("design:type", Array)
], CommentResponseUncheckedCreateNestedManyWithoutCommentInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_response_create_many_comment_input_envelope_input_1.CommentResponseCreateManyCommentInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => comment_response_create_many_comment_input_envelope_input_1.CommentResponseCreateManyCommentInputEnvelope),
    __metadata("design:type", comment_response_create_many_comment_input_envelope_input_1.CommentResponseCreateManyCommentInputEnvelope)
], CommentResponseUncheckedCreateNestedManyWithoutCommentInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comment_response_where_unique_input_1.CommentResponseWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => comment_response_where_unique_input_1.CommentResponseWhereUniqueInput),
    __metadata("design:type", Array)
], CommentResponseUncheckedCreateNestedManyWithoutCommentInput.prototype, "connect", void 0);
exports.CommentResponseUncheckedCreateNestedManyWithoutCommentInput = CommentResponseUncheckedCreateNestedManyWithoutCommentInput = __decorate([
    (0, graphql_2.InputType)()
], CommentResponseUncheckedCreateNestedManyWithoutCommentInput);
//# sourceMappingURL=comment-response-unchecked-create-nested-many-without-comment.input.js.map