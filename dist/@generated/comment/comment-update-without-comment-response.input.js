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
exports.CommentUpdateWithoutCommentResponseInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const nullable_string_field_update_operations_input_1 = require("../prisma/nullable-string-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const nullable_float_field_update_operations_input_1 = require("../prisma/nullable-float-field-update-operations.input");
const nullable_bool_field_update_operations_input_1 = require("../prisma/nullable-bool-field-update-operations.input");
const company_update_one_without_comment_nested_input_1 = require("../company/company-update-one-without-comment-nested.input");
const user_update_one_without_comment_nested_input_1 = require("../user/user-update-one-without-comment-nested.input");
let CommentUpdateWithoutCommentResponseInput = exports.CommentUpdateWithoutCommentResponseInput = class CommentUpdateWithoutCommentResponseInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], CommentUpdateWithoutCommentResponseInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], CommentUpdateWithoutCommentResponseInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], CommentUpdateWithoutCommentResponseInput.prototype, "serviceType", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], CommentUpdateWithoutCommentResponseInput.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], CommentUpdateWithoutCommentResponseInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], CommentUpdateWithoutCommentResponseInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_float_field_update_operations_input_1.NullableFloatFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", nullable_float_field_update_operations_input_1.NullableFloatFieldUpdateOperationsInput)
], CommentUpdateWithoutCommentResponseInput.prototype, "rating", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_bool_field_update_operations_input_1.NullableBoolFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", nullable_bool_field_update_operations_input_1.NullableBoolFieldUpdateOperationsInput)
], CommentUpdateWithoutCommentResponseInput.prototype, "approved", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_bool_field_update_operations_input_1.NullableBoolFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", nullable_bool_field_update_operations_input_1.NullableBoolFieldUpdateOperationsInput)
], CommentUpdateWithoutCommentResponseInput.prototype, "removed", void 0);
__decorate([
    (0, graphql_1.Field)(() => company_update_one_without_comment_nested_input_1.CompanyUpdateOneWithoutCommentNestedInput, { nullable: true }),
    __metadata("design:type", company_update_one_without_comment_nested_input_1.CompanyUpdateOneWithoutCommentNestedInput)
], CommentUpdateWithoutCommentResponseInput.prototype, "Company", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_update_one_without_comment_nested_input_1.UserUpdateOneWithoutCommentNestedInput, { nullable: true }),
    __metadata("design:type", user_update_one_without_comment_nested_input_1.UserUpdateOneWithoutCommentNestedInput)
], CommentUpdateWithoutCommentResponseInput.prototype, "User", void 0);
exports.CommentUpdateWithoutCommentResponseInput = CommentUpdateWithoutCommentResponseInput = __decorate([
    (0, graphql_2.InputType)()
], CommentUpdateWithoutCommentResponseInput);
//# sourceMappingURL=comment-update-without-comment-response.input.js.map