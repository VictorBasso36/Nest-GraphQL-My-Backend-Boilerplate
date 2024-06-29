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
exports.CompanyCreateOrConnectWithoutCommentInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const company_where_unique_input_1 = require("./company-where-unique.input");
const class_transformer_1 = require("class-transformer");
const company_create_without_comment_input_1 = require("./company-create-without-comment.input");
let CompanyCreateOrConnectWithoutCommentInput = exports.CompanyCreateOrConnectWithoutCommentInput = class CompanyCreateOrConnectWithoutCommentInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => company_where_unique_input_1.CompanyWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => company_where_unique_input_1.CompanyWhereUniqueInput),
    __metadata("design:type", Object)
], CompanyCreateOrConnectWithoutCommentInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => company_create_without_comment_input_1.CompanyCreateWithoutCommentInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => company_create_without_comment_input_1.CompanyCreateWithoutCommentInput),
    __metadata("design:type", company_create_without_comment_input_1.CompanyCreateWithoutCommentInput)
], CompanyCreateOrConnectWithoutCommentInput.prototype, "create", void 0);
exports.CompanyCreateOrConnectWithoutCommentInput = CompanyCreateOrConnectWithoutCommentInput = __decorate([
    (0, graphql_2.InputType)()
], CompanyCreateOrConnectWithoutCommentInput);
//# sourceMappingURL=company-create-or-connect-without-comment.input.js.map