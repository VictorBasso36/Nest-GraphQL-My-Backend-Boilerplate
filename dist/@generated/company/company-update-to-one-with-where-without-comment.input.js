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
exports.CompanyUpdateToOneWithWhereWithoutCommentInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const company_where_input_1 = require("./company-where.input");
const class_transformer_1 = require("class-transformer");
const company_update_without_comment_input_1 = require("./company-update-without-comment.input");
let CompanyUpdateToOneWithWhereWithoutCommentInput = exports.CompanyUpdateToOneWithWhereWithoutCommentInput = class CompanyUpdateToOneWithWhereWithoutCommentInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => company_where_input_1.CompanyWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => company_where_input_1.CompanyWhereInput),
    __metadata("design:type", company_where_input_1.CompanyWhereInput)
], CompanyUpdateToOneWithWhereWithoutCommentInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => company_update_without_comment_input_1.CompanyUpdateWithoutCommentInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => company_update_without_comment_input_1.CompanyUpdateWithoutCommentInput),
    __metadata("design:type", company_update_without_comment_input_1.CompanyUpdateWithoutCommentInput)
], CompanyUpdateToOneWithWhereWithoutCommentInput.prototype, "data", void 0);
exports.CompanyUpdateToOneWithWhereWithoutCommentInput = CompanyUpdateToOneWithWhereWithoutCommentInput = __decorate([
    (0, graphql_2.InputType)()
], CompanyUpdateToOneWithWhereWithoutCommentInput);
//# sourceMappingURL=company-update-to-one-with-where-without-comment.input.js.map