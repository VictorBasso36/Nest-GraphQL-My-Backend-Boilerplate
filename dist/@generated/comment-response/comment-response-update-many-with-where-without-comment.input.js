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
exports.CommentResponseUpdateManyWithWhereWithoutCommentInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const comment_response_scalar_where_input_1 = require("./comment-response-scalar-where.input");
const class_transformer_1 = require("class-transformer");
const comment_response_update_many_mutation_input_1 = require("./comment-response-update-many-mutation.input");
let CommentResponseUpdateManyWithWhereWithoutCommentInput = exports.CommentResponseUpdateManyWithWhereWithoutCommentInput = class CommentResponseUpdateManyWithWhereWithoutCommentInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => comment_response_scalar_where_input_1.CommentResponseScalarWhereInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => comment_response_scalar_where_input_1.CommentResponseScalarWhereInput),
    __metadata("design:type", comment_response_scalar_where_input_1.CommentResponseScalarWhereInput)
], CommentResponseUpdateManyWithWhereWithoutCommentInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_response_update_many_mutation_input_1.CommentResponseUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => comment_response_update_many_mutation_input_1.CommentResponseUpdateManyMutationInput),
    __metadata("design:type", comment_response_update_many_mutation_input_1.CommentResponseUpdateManyMutationInput)
], CommentResponseUpdateManyWithWhereWithoutCommentInput.prototype, "data", void 0);
exports.CommentResponseUpdateManyWithWhereWithoutCommentInput = CommentResponseUpdateManyWithWhereWithoutCommentInput = __decorate([
    (0, graphql_2.InputType)()
], CommentResponseUpdateManyWithWhereWithoutCommentInput);
//# sourceMappingURL=comment-response-update-many-with-where-without-comment.input.js.map