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
exports.UserCreateNestedManyWithoutCompanyInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_create_without_company_input_1 = require("./user-create-without-company.input");
const class_transformer_1 = require("class-transformer");
const user_create_or_connect_without_company_input_1 = require("./user-create-or-connect-without-company.input");
const user_create_many_company_input_envelope_input_1 = require("./user-create-many-company-input-envelope.input");
const user_where_unique_input_1 = require("./user-where-unique.input");
let UserCreateNestedManyWithoutCompanyInput = exports.UserCreateNestedManyWithoutCompanyInput = class UserCreateNestedManyWithoutCompanyInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => [user_create_without_company_input_1.UserCreateWithoutCompanyInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => user_create_without_company_input_1.UserCreateWithoutCompanyInput),
    __metadata("design:type", Array)
], UserCreateNestedManyWithoutCompanyInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [user_create_or_connect_without_company_input_1.UserCreateOrConnectWithoutCompanyInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => user_create_or_connect_without_company_input_1.UserCreateOrConnectWithoutCompanyInput),
    __metadata("design:type", Array)
], UserCreateNestedManyWithoutCompanyInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_create_many_company_input_envelope_input_1.UserCreateManyCompanyInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_create_many_company_input_envelope_input_1.UserCreateManyCompanyInputEnvelope),
    __metadata("design:type", user_create_many_company_input_envelope_input_1.UserCreateManyCompanyInputEnvelope)
], UserCreateNestedManyWithoutCompanyInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [user_where_unique_input_1.UserWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => user_where_unique_input_1.UserWhereUniqueInput),
    __metadata("design:type", Array)
], UserCreateNestedManyWithoutCompanyInput.prototype, "connect", void 0);
exports.UserCreateNestedManyWithoutCompanyInput = UserCreateNestedManyWithoutCompanyInput = __decorate([
    (0, graphql_2.InputType)()
], UserCreateNestedManyWithoutCompanyInput);
//# sourceMappingURL=user-create-nested-many-without-company.input.js.map