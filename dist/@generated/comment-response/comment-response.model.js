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
exports.CommentResponse = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const comment_model_1 = require("../comment/comment.model");
let CommentResponse = exports.CommentResponse = class CommentResponse {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false }),
    __metadata("design:type", String)
], CommentResponse.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], CommentResponse.prototype, "CommentId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true, defaultValue: false }),
    __metadata("design:type", Boolean)
], CommentResponse.prototype, "approved", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], CommentResponse.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], CommentResponse.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], CommentResponse.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_model_1.Comment, { nullable: false }),
    __metadata("design:type", comment_model_1.Comment)
], CommentResponse.prototype, "Comment", void 0);
exports.CommentResponse = CommentResponse = __decorate([
    (0, graphql_2.ObjectType)()
], CommentResponse);
//# sourceMappingURL=comment-response.model.js.map