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
exports.CommentUncheckedUpdateManyWithoutCompanyNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const comment_create_without_company_input_1 = require("./comment-create-without-company.input");
const class_transformer_1 = require("class-transformer");
const comment_create_or_connect_without_company_input_1 = require("./comment-create-or-connect-without-company.input");
const comment_upsert_with_where_unique_without_company_input_1 = require("./comment-upsert-with-where-unique-without-company.input");
const comment_create_many_company_input_envelope_input_1 = require("./comment-create-many-company-input-envelope.input");
const comment_where_unique_input_1 = require("./comment-where-unique.input");
const comment_update_with_where_unique_without_company_input_1 = require("./comment-update-with-where-unique-without-company.input");
const comment_update_many_with_where_without_company_input_1 = require("./comment-update-many-with-where-without-company.input");
const comment_scalar_where_input_1 = require("./comment-scalar-where.input");
let CommentUncheckedUpdateManyWithoutCompanyNestedInput = exports.CommentUncheckedUpdateManyWithoutCompanyNestedInput = class CommentUncheckedUpdateManyWithoutCompanyNestedInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => [comment_create_without_company_input_1.CommentCreateWithoutCompanyInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => comment_create_without_company_input_1.CommentCreateWithoutCompanyInput),
    __metadata("design:type", Array)
], CommentUncheckedUpdateManyWithoutCompanyNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comment_create_or_connect_without_company_input_1.CommentCreateOrConnectWithoutCompanyInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => comment_create_or_connect_without_company_input_1.CommentCreateOrConnectWithoutCompanyInput),
    __metadata("design:type", Array)
], CommentUncheckedUpdateManyWithoutCompanyNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comment_upsert_with_where_unique_without_company_input_1.CommentUpsertWithWhereUniqueWithoutCompanyInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => comment_upsert_with_where_unique_without_company_input_1.CommentUpsertWithWhereUniqueWithoutCompanyInput),
    __metadata("design:type", Array)
], CommentUncheckedUpdateManyWithoutCompanyNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_create_many_company_input_envelope_input_1.CommentCreateManyCompanyInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => comment_create_many_company_input_envelope_input_1.CommentCreateManyCompanyInputEnvelope),
    __metadata("design:type", comment_create_many_company_input_envelope_input_1.CommentCreateManyCompanyInputEnvelope)
], CommentUncheckedUpdateManyWithoutCompanyNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comment_where_unique_input_1.CommentWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => comment_where_unique_input_1.CommentWhereUniqueInput),
    __metadata("design:type", Array)
], CommentUncheckedUpdateManyWithoutCompanyNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comment_where_unique_input_1.CommentWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => comment_where_unique_input_1.CommentWhereUniqueInput),
    __metadata("design:type", Array)
], CommentUncheckedUpdateManyWithoutCompanyNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comment_where_unique_input_1.CommentWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => comment_where_unique_input_1.CommentWhereUniqueInput),
    __metadata("design:type", Array)
], CommentUncheckedUpdateManyWithoutCompanyNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comment_where_unique_input_1.CommentWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => comment_where_unique_input_1.CommentWhereUniqueInput),
    __metadata("design:type", Array)
], CommentUncheckedUpdateManyWithoutCompanyNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comment_update_with_where_unique_without_company_input_1.CommentUpdateWithWhereUniqueWithoutCompanyInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => comment_update_with_where_unique_without_company_input_1.CommentUpdateWithWhereUniqueWithoutCompanyInput),
    __metadata("design:type", Array)
], CommentUncheckedUpdateManyWithoutCompanyNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comment_update_many_with_where_without_company_input_1.CommentUpdateManyWithWhereWithoutCompanyInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => comment_update_many_with_where_without_company_input_1.CommentUpdateManyWithWhereWithoutCompanyInput),
    __metadata("design:type", Array)
], CommentUncheckedUpdateManyWithoutCompanyNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comment_scalar_where_input_1.CommentScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => comment_scalar_where_input_1.CommentScalarWhereInput),
    __metadata("design:type", Array)
], CommentUncheckedUpdateManyWithoutCompanyNestedInput.prototype, "deleteMany", void 0);
exports.CommentUncheckedUpdateManyWithoutCompanyNestedInput = CommentUncheckedUpdateManyWithoutCompanyNestedInput = __decorate([
    (0, graphql_2.InputType)()
], CommentUncheckedUpdateManyWithoutCompanyNestedInput);
//# sourceMappingURL=comment-unchecked-update-many-without-company-nested.input.js.map