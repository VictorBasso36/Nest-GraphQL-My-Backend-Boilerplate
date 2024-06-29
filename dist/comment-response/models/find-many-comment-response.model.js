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
exports.CommentResponsePaginatedModel = void 0;
const graphql_1 = require("@nestjs/graphql");
const comment_response_model_1 = require("../../@generated/comment-response/comment-response.model");
const page_info_model_1 = require("../../common/pagination/page-info.model");
let CommentResponsePaginatedModel = exports.CommentResponsePaginatedModel = class CommentResponsePaginatedModel {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => page_info_model_1.PageInfo, { nullable: true }),
    __metadata("design:type", page_info_model_1.PageInfo)
], CommentResponsePaginatedModel.prototype, "pageInfo", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comment_response_model_1.CommentResponse], {}),
    __metadata("design:type", Array)
], CommentResponsePaginatedModel.prototype, "nodes", void 0);
exports.CommentResponsePaginatedModel = CommentResponsePaginatedModel = __decorate([
    (0, graphql_1.ObjectType)()
], CommentResponsePaginatedModel);
//# sourceMappingURL=find-many-comment-response.model.js.map