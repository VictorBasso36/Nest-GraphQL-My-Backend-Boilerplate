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
exports.CompanyUpdateWithoutUserInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const nullable_string_field_update_operations_input_1 = require("../prisma/nullable-string-field-update-operations.input");
const nullable_bool_field_update_operations_input_1 = require("../prisma/nullable-bool-field-update-operations.input");
const nullable_int_field_update_operations_input_1 = require("../prisma/nullable-int-field-update-operations.input");
const nullable_float_field_update_operations_input_1 = require("../prisma/nullable-float-field-update-operations.input");
const comment_update_many_without_company_nested_input_1 = require("../comment/comment-update-many-without-company-nested.input");
let CompanyUpdateWithoutUserInput = exports.CompanyUpdateWithoutUserInput = class CompanyUpdateWithoutUserInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], CompanyUpdateWithoutUserInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], CompanyUpdateWithoutUserInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], CompanyUpdateWithoutUserInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], CompanyUpdateWithoutUserInput.prototype, "cnpj", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], CompanyUpdateWithoutUserInput.prototype, "location", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], CompanyUpdateWithoutUserInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], CompanyUpdateWithoutUserInput.prototype, "urlImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], CompanyUpdateWithoutUserInput.prototype, "working", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_bool_field_update_operations_input_1.NullableBoolFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", nullable_bool_field_update_operations_input_1.NullableBoolFieldUpdateOperationsInput)
], CompanyUpdateWithoutUserInput.prototype, "approved", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], CompanyUpdateWithoutUserInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_int_field_update_operations_input_1.NullableIntFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", nullable_int_field_update_operations_input_1.NullableIntFieldUpdateOperationsInput)
], CompanyUpdateWithoutUserInput.prototype, "ratingCount", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_float_field_update_operations_input_1.NullableFloatFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", nullable_float_field_update_operations_input_1.NullableFloatFieldUpdateOperationsInput)
], CompanyUpdateWithoutUserInput.prototype, "rating", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_update_many_without_company_nested_input_1.CommentUpdateManyWithoutCompanyNestedInput, { nullable: true }),
    __metadata("design:type", comment_update_many_without_company_nested_input_1.CommentUpdateManyWithoutCompanyNestedInput)
], CompanyUpdateWithoutUserInput.prototype, "Comment", void 0);
exports.CompanyUpdateWithoutUserInput = CompanyUpdateWithoutUserInput = __decorate([
    (0, graphql_2.InputType)()
], CompanyUpdateWithoutUserInput);
//# sourceMappingURL=company-update-without-user.input.js.map