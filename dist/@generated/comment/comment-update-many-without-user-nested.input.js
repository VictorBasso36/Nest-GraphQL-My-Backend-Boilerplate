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
exports.CommentUpdateManyWithoutUserNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const comment_create_without_user_input_1 = require("./comment-create-without-user.input");
const class_transformer_1 = require("class-transformer");
const comment_create_or_connect_without_user_input_1 = require("./comment-create-or-connect-without-user.input");
const comment_upsert_with_where_unique_without_user_input_1 = require("./comment-upsert-with-where-unique-without-user.input");
const comment_create_many_user_input_envelope_input_1 = require("./comment-create-many-user-input-envelope.input");
const comment_where_unique_input_1 = require("./comment-where-unique.input");
const comment_update_with_where_unique_without_user_input_1 = require("./comment-update-with-where-unique-without-user.input");
const comment_update_many_with_where_without_user_input_1 = require("./comment-update-many-with-where-without-user.input");
const comment_scalar_where_input_1 = require("./comment-scalar-where.input");
let CommentUpdateManyWithoutUserNestedInput = exports.CommentUpdateManyWithoutUserNestedInput = class CommentUpdateManyWithoutUserNestedInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => [comment_create_without_user_input_1.CommentCreateWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => comment_create_without_user_input_1.CommentCreateWithoutUserInput),
    __metadata("design:type", Array)
], CommentUpdateManyWithoutUserNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comment_create_or_connect_without_user_input_1.CommentCreateOrConnectWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => comment_create_or_connect_without_user_input_1.CommentCreateOrConnectWithoutUserInput),
    __metadata("design:type", Array)
], CommentUpdateManyWithoutUserNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comment_upsert_with_where_unique_without_user_input_1.CommentUpsertWithWhereUniqueWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => comment_upsert_with_where_unique_without_user_input_1.CommentUpsertWithWhereUniqueWithoutUserInput),
    __metadata("design:type", Array)
], CommentUpdateManyWithoutUserNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_create_many_user_input_envelope_input_1.CommentCreateManyUserInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => comment_create_many_user_input_envelope_input_1.CommentCreateManyUserInputEnvelope),
    __metadata("design:type", comment_create_many_user_input_envelope_input_1.CommentCreateManyUserInputEnvelope)
], CommentUpdateManyWithoutUserNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comment_where_unique_input_1.CommentWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => comment_where_unique_input_1.CommentWhereUniqueInput),
    __metadata("design:type", Array)
], CommentUpdateManyWithoutUserNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comment_where_unique_input_1.CommentWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => comment_where_unique_input_1.CommentWhereUniqueInput),
    __metadata("design:type", Array)
], CommentUpdateManyWithoutUserNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comment_where_unique_input_1.CommentWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => comment_where_unique_input_1.CommentWhereUniqueInput),
    __metadata("design:type", Array)
], CommentUpdateManyWithoutUserNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comment_where_unique_input_1.CommentWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => comment_where_unique_input_1.CommentWhereUniqueInput),
    __metadata("design:type", Array)
], CommentUpdateManyWithoutUserNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comment_update_with_where_unique_without_user_input_1.CommentUpdateWithWhereUniqueWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => comment_update_with_where_unique_without_user_input_1.CommentUpdateWithWhereUniqueWithoutUserInput),
    __metadata("design:type", Array)
], CommentUpdateManyWithoutUserNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comment_update_many_with_where_without_user_input_1.CommentUpdateManyWithWhereWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => comment_update_many_with_where_without_user_input_1.CommentUpdateManyWithWhereWithoutUserInput),
    __metadata("design:type", Array)
], CommentUpdateManyWithoutUserNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comment_scalar_where_input_1.CommentScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => comment_scalar_where_input_1.CommentScalarWhereInput),
    __metadata("design:type", Array)
], CommentUpdateManyWithoutUserNestedInput.prototype, "deleteMany", void 0);
exports.CommentUpdateManyWithoutUserNestedInput = CommentUpdateManyWithoutUserNestedInput = __decorate([
    (0, graphql_2.InputType)()
], CommentUpdateManyWithoutUserNestedInput);
//# sourceMappingURL=comment-update-many-without-user-nested.input.js.map