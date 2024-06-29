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
exports.UpsertOneCommentResponseArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const comment_response_where_unique_input_1 = require("./comment-response-where-unique.input");
const class_transformer_1 = require("class-transformer");
const comment_response_create_input_1 = require("./comment-response-create.input");
const comment_response_update_input_1 = require("./comment-response-update.input");
let UpsertOneCommentResponseArgs = exports.UpsertOneCommentResponseArgs = class UpsertOneCommentResponseArgs {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => comment_response_where_unique_input_1.CommentResponseWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => comment_response_where_unique_input_1.CommentResponseWhereUniqueInput),
    __metadata("design:type", Object)
], UpsertOneCommentResponseArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_response_create_input_1.CommentResponseCreateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => comment_response_create_input_1.CommentResponseCreateInput),
    __metadata("design:type", comment_response_create_input_1.CommentResponseCreateInput)
], UpsertOneCommentResponseArgs.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_response_update_input_1.CommentResponseUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => comment_response_update_input_1.CommentResponseUpdateInput),
    __metadata("design:type", comment_response_update_input_1.CommentResponseUpdateInput)
], UpsertOneCommentResponseArgs.prototype, "update", void 0);
exports.UpsertOneCommentResponseArgs = UpsertOneCommentResponseArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpsertOneCommentResponseArgs);
//# sourceMappingURL=upsert-one-comment-response.args.js.map