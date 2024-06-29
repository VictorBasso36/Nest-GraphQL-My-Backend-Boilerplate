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
exports.CommentResponseGroupBy = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const comment_response_count_aggregate_output_1 = require("./comment-response-count-aggregate.output");
const comment_response_min_aggregate_output_1 = require("./comment-response-min-aggregate.output");
const comment_response_max_aggregate_output_1 = require("./comment-response-max-aggregate.output");
let CommentResponseGroupBy = exports.CommentResponseGroupBy = class CommentResponseGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], CommentResponseGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], CommentResponseGroupBy.prototype, "CommentId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], CommentResponseGroupBy.prototype, "approved", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], CommentResponseGroupBy.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], CommentResponseGroupBy.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], CommentResponseGroupBy.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_response_count_aggregate_output_1.CommentResponseCountAggregate, { nullable: true }),
    __metadata("design:type", comment_response_count_aggregate_output_1.CommentResponseCountAggregate)
], CommentResponseGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_response_min_aggregate_output_1.CommentResponseMinAggregate, { nullable: true }),
    __metadata("design:type", comment_response_min_aggregate_output_1.CommentResponseMinAggregate)
], CommentResponseGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_response_max_aggregate_output_1.CommentResponseMaxAggregate, { nullable: true }),
    __metadata("design:type", comment_response_max_aggregate_output_1.CommentResponseMaxAggregate)
], CommentResponseGroupBy.prototype, "_max", void 0);
exports.CommentResponseGroupBy = CommentResponseGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], CommentResponseGroupBy);
//# sourceMappingURL=comment-response-group-by.output.js.map