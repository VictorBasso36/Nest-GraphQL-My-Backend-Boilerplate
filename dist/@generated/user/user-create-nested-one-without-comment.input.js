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
exports.UserCreateNestedOneWithoutCommentInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_create_without_comment_input_1 = require("./user-create-without-comment.input");
const class_transformer_1 = require("class-transformer");
const user_create_or_connect_without_comment_input_1 = require("./user-create-or-connect-without-comment.input");
const client_1 = require("@prisma/client");
const user_where_unique_input_1 = require("./user-where-unique.input");
let UserCreateNestedOneWithoutCommentInput = exports.UserCreateNestedOneWithoutCommentInput = class UserCreateNestedOneWithoutCommentInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => user_create_without_comment_input_1.UserCreateWithoutCommentInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_create_without_comment_input_1.UserCreateWithoutCommentInput),
    __metadata("design:type", user_create_without_comment_input_1.UserCreateWithoutCommentInput)
], UserCreateNestedOneWithoutCommentInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_create_or_connect_without_comment_input_1.UserCreateOrConnectWithoutCommentInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_create_or_connect_without_comment_input_1.UserCreateOrConnectWithoutCommentInput),
    __metadata("design:type", user_create_or_connect_without_comment_input_1.UserCreateOrConnectWithoutCommentInput)
], UserCreateNestedOneWithoutCommentInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_where_unique_input_1.UserWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_where_unique_input_1.UserWhereUniqueInput),
    __metadata("design:type", Object)
], UserCreateNestedOneWithoutCommentInput.prototype, "connect", void 0);
exports.UserCreateNestedOneWithoutCommentInput = UserCreateNestedOneWithoutCommentInput = __decorate([
    (0, graphql_2.InputType)()
], UserCreateNestedOneWithoutCommentInput);
//# sourceMappingURL=user-create-nested-one-without-comment.input.js.map