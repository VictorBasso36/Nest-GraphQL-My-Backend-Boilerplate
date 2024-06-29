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
exports.CompanyUpdateOneWithoutCommentNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const company_create_without_comment_input_1 = require("./company-create-without-comment.input");
const class_transformer_1 = require("class-transformer");
const company_create_or_connect_without_comment_input_1 = require("./company-create-or-connect-without-comment.input");
const company_upsert_without_comment_input_1 = require("./company-upsert-without-comment.input");
const company_where_input_1 = require("./company-where.input");
const client_1 = require("@prisma/client");
const company_where_unique_input_1 = require("./company-where-unique.input");
const company_update_to_one_with_where_without_comment_input_1 = require("./company-update-to-one-with-where-without-comment.input");
let CompanyUpdateOneWithoutCommentNestedInput = exports.CompanyUpdateOneWithoutCommentNestedInput = class CompanyUpdateOneWithoutCommentNestedInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => company_create_without_comment_input_1.CompanyCreateWithoutCommentInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => company_create_without_comment_input_1.CompanyCreateWithoutCommentInput),
    __metadata("design:type", company_create_without_comment_input_1.CompanyCreateWithoutCommentInput)
], CompanyUpdateOneWithoutCommentNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => company_create_or_connect_without_comment_input_1.CompanyCreateOrConnectWithoutCommentInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => company_create_or_connect_without_comment_input_1.CompanyCreateOrConnectWithoutCommentInput),
    __metadata("design:type", company_create_or_connect_without_comment_input_1.CompanyCreateOrConnectWithoutCommentInput)
], CompanyUpdateOneWithoutCommentNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => company_upsert_without_comment_input_1.CompanyUpsertWithoutCommentInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => company_upsert_without_comment_input_1.CompanyUpsertWithoutCommentInput),
    __metadata("design:type", company_upsert_without_comment_input_1.CompanyUpsertWithoutCommentInput)
], CompanyUpdateOneWithoutCommentNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => company_where_input_1.CompanyWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => company_where_input_1.CompanyWhereInput),
    __metadata("design:type", company_where_input_1.CompanyWhereInput)
], CompanyUpdateOneWithoutCommentNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => company_where_input_1.CompanyWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => company_where_input_1.CompanyWhereInput),
    __metadata("design:type", company_where_input_1.CompanyWhereInput)
], CompanyUpdateOneWithoutCommentNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => company_where_unique_input_1.CompanyWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => company_where_unique_input_1.CompanyWhereUniqueInput),
    __metadata("design:type", Object)
], CompanyUpdateOneWithoutCommentNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => company_update_to_one_with_where_without_comment_input_1.CompanyUpdateToOneWithWhereWithoutCommentInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => company_update_to_one_with_where_without_comment_input_1.CompanyUpdateToOneWithWhereWithoutCommentInput),
    __metadata("design:type", company_update_to_one_with_where_without_comment_input_1.CompanyUpdateToOneWithWhereWithoutCommentInput)
], CompanyUpdateOneWithoutCommentNestedInput.prototype, "update", void 0);
exports.CompanyUpdateOneWithoutCommentNestedInput = CompanyUpdateOneWithoutCommentNestedInput = __decorate([
    (0, graphql_2.InputType)()
], CompanyUpdateOneWithoutCommentNestedInput);
//# sourceMappingURL=company-update-one-without-comment-nested.input.js.map