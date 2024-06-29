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
exports.UserUpsertWithWhereUniqueWithoutCompanyInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const user_where_unique_input_1 = require("./user-where-unique.input");
const class_transformer_1 = require("class-transformer");
const user_update_without_company_input_1 = require("./user-update-without-company.input");
const user_create_without_company_input_1 = require("./user-create-without-company.input");
let UserUpsertWithWhereUniqueWithoutCompanyInput = exports.UserUpsertWithWhereUniqueWithoutCompanyInput = class UserUpsertWithWhereUniqueWithoutCompanyInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => user_where_unique_input_1.UserWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => user_where_unique_input_1.UserWhereUniqueInput),
    __metadata("design:type", Object)
], UserUpsertWithWhereUniqueWithoutCompanyInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_update_without_company_input_1.UserUpdateWithoutCompanyInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => user_update_without_company_input_1.UserUpdateWithoutCompanyInput),
    __metadata("design:type", user_update_without_company_input_1.UserUpdateWithoutCompanyInput)
], UserUpsertWithWhereUniqueWithoutCompanyInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_create_without_company_input_1.UserCreateWithoutCompanyInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => user_create_without_company_input_1.UserCreateWithoutCompanyInput),
    __metadata("design:type", user_create_without_company_input_1.UserCreateWithoutCompanyInput)
], UserUpsertWithWhereUniqueWithoutCompanyInput.prototype, "create", void 0);
exports.UserUpsertWithWhereUniqueWithoutCompanyInput = UserUpsertWithWhereUniqueWithoutCompanyInput = __decorate([
    (0, graphql_2.InputType)()
], UserUpsertWithWhereUniqueWithoutCompanyInput);
//# sourceMappingURL=user-upsert-with-where-unique-without-company.input.js.map