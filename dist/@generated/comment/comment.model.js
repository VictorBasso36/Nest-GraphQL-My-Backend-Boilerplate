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
exports.Comment = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const graphql_4 = require("@nestjs/graphql");
const company_model_1 = require("../company/company.model");
const user_model_1 = require("../user/user.model");
const comment_response_model_1 = require("../comment-response/comment-response.model");
const comment_count_output_1 = require("./comment-count.output");
let Comment = exports.Comment = class Comment {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false }),
    __metadata("design:type", String)
], Comment.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], Comment.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], Comment.prototype, "serviceType", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], Comment.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], Comment.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], Comment.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Float, { nullable: true }),
    __metadata("design:type", Number)
], Comment.prototype, "rating", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true, defaultValue: false }),
    __metadata("design:type", Boolean)
], Comment.prototype, "approved", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true, defaultValue: false }),
    __metadata("design:type", Boolean)
], Comment.prototype, "removed", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], Comment.prototype, "companyId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], Comment.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => company_model_1.Company, { nullable: true }),
    __metadata("design:type", company_model_1.Company)
], Comment.prototype, "Company", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_model_1.User, { nullable: true }),
    __metadata("design:type", user_model_1.User)
], Comment.prototype, "User", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comment_response_model_1.CommentResponse], { nullable: true }),
    __metadata("design:type", Array)
], Comment.prototype, "CommentResponse", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_count_output_1.CommentCount, { nullable: false }),
    __metadata("design:type", comment_count_output_1.CommentCount)
], Comment.prototype, "_count", void 0);
exports.Comment = Comment = __decorate([
    (0, graphql_2.ObjectType)()
], Comment);
//# sourceMappingURL=comment.model.js.map