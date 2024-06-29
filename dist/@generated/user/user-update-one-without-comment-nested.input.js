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
exports.UserUpdateOneWithoutCommentNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_create_without_comment_input_1 = require("./user-create-without-comment.input");
const class_transformer_1 = require("class-transformer");
const user_create_or_connect_without_comment_input_1 = require("./user-create-or-connect-without-comment.input");
const user_upsert_without_comment_input_1 = require("./user-upsert-without-comment.input");
const user_where_input_1 = require("./user-where.input");
const client_1 = require("@prisma/client");
const user_where_unique_input_1 = require("./user-where-unique.input");
const user_update_to_one_with_where_without_comment_input_1 = require("./user-update-to-one-with-where-without-comment.input");
let UserUpdateOneWithoutCommentNestedInput = exports.UserUpdateOneWithoutCommentNestedInput = class UserUpdateOneWithoutCommentNestedInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => user_create_without_comment_input_1.UserCreateWithoutCommentInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_create_without_comment_input_1.UserCreateWithoutCommentInput),
    __metadata("design:type", user_create_without_comment_input_1.UserCreateWithoutCommentInput)
], UserUpdateOneWithoutCommentNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_create_or_connect_without_comment_input_1.UserCreateOrConnectWithoutCommentInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_create_or_connect_without_comment_input_1.UserCreateOrConnectWithoutCommentInput),
    __metadata("design:type", user_create_or_connect_without_comment_input_1.UserCreateOrConnectWithoutCommentInput)
], UserUpdateOneWithoutCommentNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_upsert_without_comment_input_1.UserUpsertWithoutCommentInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_upsert_without_comment_input_1.UserUpsertWithoutCommentInput),
    __metadata("design:type", user_upsert_without_comment_input_1.UserUpsertWithoutCommentInput)
], UserUpdateOneWithoutCommentNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_where_input_1.UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_where_input_1.UserWhereInput),
    __metadata("design:type", user_where_input_1.UserWhereInput)
], UserUpdateOneWithoutCommentNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_where_input_1.UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_where_input_1.UserWhereInput),
    __metadata("design:type", user_where_input_1.UserWhereInput)
], UserUpdateOneWithoutCommentNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_where_unique_input_1.UserWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_where_unique_input_1.UserWhereUniqueInput),
    __metadata("design:type", Object)
], UserUpdateOneWithoutCommentNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_update_to_one_with_where_without_comment_input_1.UserUpdateToOneWithWhereWithoutCommentInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_update_to_one_with_where_without_comment_input_1.UserUpdateToOneWithWhereWithoutCommentInput),
    __metadata("design:type", user_update_to_one_with_where_without_comment_input_1.UserUpdateToOneWithWhereWithoutCommentInput)
], UserUpdateOneWithoutCommentNestedInput.prototype, "update", void 0);
exports.UserUpdateOneWithoutCommentNestedInput = UserUpdateOneWithoutCommentNestedInput = __decorate([
    (0, graphql_2.InputType)()
], UserUpdateOneWithoutCommentNestedInput);
//# sourceMappingURL=user-update-one-without-comment-nested.input.js.map