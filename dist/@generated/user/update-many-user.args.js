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
exports.UpdateManyUserArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_update_many_mutation_input_1 = require("./user-update-many-mutation.input");
const class_transformer_1 = require("class-transformer");
const user_where_input_1 = require("./user-where.input");
let UpdateManyUserArgs = exports.UpdateManyUserArgs = class UpdateManyUserArgs {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => user_update_many_mutation_input_1.UserUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => user_update_many_mutation_input_1.UserUpdateManyMutationInput),
    __metadata("design:type", user_update_many_mutation_input_1.UserUpdateManyMutationInput)
], UpdateManyUserArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_where_input_1.UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_where_input_1.UserWhereInput),
    __metadata("design:type", user_where_input_1.UserWhereInput)
], UpdateManyUserArgs.prototype, "where", void 0);
exports.UpdateManyUserArgs = UpdateManyUserArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpdateManyUserArgs);
//# sourceMappingURL=update-many-user.args.js.map