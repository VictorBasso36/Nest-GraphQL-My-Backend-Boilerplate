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
exports.UserUpdateManyWithWhereWithoutCompanyInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_scalar_where_input_1 = require("./user-scalar-where.input");
const class_transformer_1 = require("class-transformer");
const user_update_many_mutation_input_1 = require("./user-update-many-mutation.input");
let UserUpdateManyWithWhereWithoutCompanyInput = exports.UserUpdateManyWithWhereWithoutCompanyInput = class UserUpdateManyWithWhereWithoutCompanyInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => user_scalar_where_input_1.UserScalarWhereInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => user_scalar_where_input_1.UserScalarWhereInput),
    __metadata("design:type", user_scalar_where_input_1.UserScalarWhereInput)
], UserUpdateManyWithWhereWithoutCompanyInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_update_many_mutation_input_1.UserUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => user_update_many_mutation_input_1.UserUpdateManyMutationInput),
    __metadata("design:type", user_update_many_mutation_input_1.UserUpdateManyMutationInput)
], UserUpdateManyWithWhereWithoutCompanyInput.prototype, "data", void 0);
exports.UserUpdateManyWithWhereWithoutCompanyInput = UserUpdateManyWithWhereWithoutCompanyInput = __decorate([
    (0, graphql_2.InputType)()
], UserUpdateManyWithWhereWithoutCompanyInput);
//# sourceMappingURL=user-update-many-with-where-without-company.input.js.map