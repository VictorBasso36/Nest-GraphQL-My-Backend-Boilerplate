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
exports.CommentGroupBy = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const comment_count_aggregate_output_1 = require("./comment-count-aggregate.output");
const comment_avg_aggregate_output_1 = require("./comment-avg-aggregate.output");
const comment_sum_aggregate_output_1 = require("./comment-sum-aggregate.output");
const comment_min_aggregate_output_1 = require("./comment-min-aggregate.output");
const comment_max_aggregate_output_1 = require("./comment-max-aggregate.output");
let CommentGroupBy = exports.CommentGroupBy = class CommentGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], CommentGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], CommentGroupBy.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], CommentGroupBy.prototype, "serviceType", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], CommentGroupBy.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], CommentGroupBy.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], CommentGroupBy.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    __metadata("design:type", Number)
], CommentGroupBy.prototype, "rating", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], CommentGroupBy.prototype, "approved", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], CommentGroupBy.prototype, "removed", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], CommentGroupBy.prototype, "companyId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], CommentGroupBy.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_count_aggregate_output_1.CommentCountAggregate, { nullable: true }),
    __metadata("design:type", comment_count_aggregate_output_1.CommentCountAggregate)
], CommentGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_avg_aggregate_output_1.CommentAvgAggregate, { nullable: true }),
    __metadata("design:type", comment_avg_aggregate_output_1.CommentAvgAggregate)
], CommentGroupBy.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_sum_aggregate_output_1.CommentSumAggregate, { nullable: true }),
    __metadata("design:type", comment_sum_aggregate_output_1.CommentSumAggregate)
], CommentGroupBy.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_min_aggregate_output_1.CommentMinAggregate, { nullable: true }),
    __metadata("design:type", comment_min_aggregate_output_1.CommentMinAggregate)
], CommentGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_max_aggregate_output_1.CommentMaxAggregate, { nullable: true }),
    __metadata("design:type", comment_max_aggregate_output_1.CommentMaxAggregate)
], CommentGroupBy.prototype, "_max", void 0);
exports.CommentGroupBy = CommentGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], CommentGroupBy);
//# sourceMappingURL=comment-group-by.output.js.map