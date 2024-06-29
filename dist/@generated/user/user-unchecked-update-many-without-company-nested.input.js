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
exports.UserUncheckedUpdateManyWithoutCompanyNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_create_without_company_input_1 = require("./user-create-without-company.input");
const class_transformer_1 = require("class-transformer");
const user_create_or_connect_without_company_input_1 = require("./user-create-or-connect-without-company.input");
const user_upsert_with_where_unique_without_company_input_1 = require("./user-upsert-with-where-unique-without-company.input");
const user_create_many_company_input_envelope_input_1 = require("./user-create-many-company-input-envelope.input");
const user_where_unique_input_1 = require("./user-where-unique.input");
const user_update_with_where_unique_without_company_input_1 = require("./user-update-with-where-unique-without-company.input");
const user_update_many_with_where_without_company_input_1 = require("./user-update-many-with-where-without-company.input");
const user_scalar_where_input_1 = require("./user-scalar-where.input");
let UserUncheckedUpdateManyWithoutCompanyNestedInput = exports.UserUncheckedUpdateManyWithoutCompanyNestedInput = class UserUncheckedUpdateManyWithoutCompanyNestedInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => [user_create_without_company_input_1.UserCreateWithoutCompanyInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => user_create_without_company_input_1.UserCreateWithoutCompanyInput),
    __metadata("design:type", Array)
], UserUncheckedUpdateManyWithoutCompanyNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [user_create_or_connect_without_company_input_1.UserCreateOrConnectWithoutCompanyInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => user_create_or_connect_without_company_input_1.UserCreateOrConnectWithoutCompanyInput),
    __metadata("design:type", Array)
], UserUncheckedUpdateManyWithoutCompanyNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [user_upsert_with_where_unique_without_company_input_1.UserUpsertWithWhereUniqueWithoutCompanyInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => user_upsert_with_where_unique_without_company_input_1.UserUpsertWithWhereUniqueWithoutCompanyInput),
    __metadata("design:type", Array)
], UserUncheckedUpdateManyWithoutCompanyNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_create_many_company_input_envelope_input_1.UserCreateManyCompanyInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_create_many_company_input_envelope_input_1.UserCreateManyCompanyInputEnvelope),
    __metadata("design:type", user_create_many_company_input_envelope_input_1.UserCreateManyCompanyInputEnvelope)
], UserUncheckedUpdateManyWithoutCompanyNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [user_where_unique_input_1.UserWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => user_where_unique_input_1.UserWhereUniqueInput),
    __metadata("design:type", Array)
], UserUncheckedUpdateManyWithoutCompanyNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [user_where_unique_input_1.UserWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => user_where_unique_input_1.UserWhereUniqueInput),
    __metadata("design:type", Array)
], UserUncheckedUpdateManyWithoutCompanyNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [user_where_unique_input_1.UserWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => user_where_unique_input_1.UserWhereUniqueInput),
    __metadata("design:type", Array)
], UserUncheckedUpdateManyWithoutCompanyNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [user_where_unique_input_1.UserWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => user_where_unique_input_1.UserWhereUniqueInput),
    __metadata("design:type", Array)
], UserUncheckedUpdateManyWithoutCompanyNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [user_update_with_where_unique_without_company_input_1.UserUpdateWithWhereUniqueWithoutCompanyInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => user_update_with_where_unique_without_company_input_1.UserUpdateWithWhereUniqueWithoutCompanyInput),
    __metadata("design:type", Array)
], UserUncheckedUpdateManyWithoutCompanyNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [user_update_many_with_where_without_company_input_1.UserUpdateManyWithWhereWithoutCompanyInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => user_update_many_with_where_without_company_input_1.UserUpdateManyWithWhereWithoutCompanyInput),
    __metadata("design:type", Array)
], UserUncheckedUpdateManyWithoutCompanyNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [user_scalar_where_input_1.UserScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => user_scalar_where_input_1.UserScalarWhereInput),
    __metadata("design:type", Array)
], UserUncheckedUpdateManyWithoutCompanyNestedInput.prototype, "deleteMany", void 0);
exports.UserUncheckedUpdateManyWithoutCompanyNestedInput = UserUncheckedUpdateManyWithoutCompanyNestedInput = __decorate([
    (0, graphql_2.InputType)()
], UserUncheckedUpdateManyWithoutCompanyNestedInput);
//# sourceMappingURL=user-unchecked-update-many-without-company-nested.input.js.map