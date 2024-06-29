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
exports.CommentGroupByArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const comment_where_input_1 = require("./comment-where.input");
const class_transformer_1 = require("class-transformer");
const comment_order_by_with_aggregation_input_1 = require("./comment-order-by-with-aggregation.input");
const comment_scalar_field_enum_1 = require("./comment-scalar-field.enum");
const comment_scalar_where_with_aggregates_input_1 = require("./comment-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const comment_count_aggregate_input_1 = require("./comment-count-aggregate.input");
const comment_avg_aggregate_input_1 = require("./comment-avg-aggregate.input");
const comment_sum_aggregate_input_1 = require("./comment-sum-aggregate.input");
const comment_min_aggregate_input_1 = require("./comment-min-aggregate.input");
const comment_max_aggregate_input_1 = require("./comment-max-aggregate.input");
let CommentGroupByArgs = exports.CommentGroupByArgs = class CommentGroupByArgs {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => comment_where_input_1.CommentWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => comment_where_input_1.CommentWhereInput),
    __metadata("design:type", comment_where_input_1.CommentWhereInput)
], CommentGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comment_order_by_with_aggregation_input_1.CommentOrderByWithAggregationInput], { nullable: true }),
    __metadata("design:type", Array)
], CommentGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comment_scalar_field_enum_1.CommentScalarFieldEnum], { nullable: false }),
    __metadata("design:type", Array)
], CommentGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_scalar_where_with_aggregates_input_1.CommentScalarWhereWithAggregatesInput, { nullable: true }),
    __metadata("design:type", comment_scalar_where_with_aggregates_input_1.CommentScalarWhereWithAggregatesInput)
], CommentGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], CommentGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], CommentGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_count_aggregate_input_1.CommentCountAggregateInput, { nullable: true }),
    __metadata("design:type", comment_count_aggregate_input_1.CommentCountAggregateInput)
], CommentGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_avg_aggregate_input_1.CommentAvgAggregateInput, { nullable: true }),
    __metadata("design:type", comment_avg_aggregate_input_1.CommentAvgAggregateInput)
], CommentGroupByArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_sum_aggregate_input_1.CommentSumAggregateInput, { nullable: true }),
    __metadata("design:type", comment_sum_aggregate_input_1.CommentSumAggregateInput)
], CommentGroupByArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_min_aggregate_input_1.CommentMinAggregateInput, { nullable: true }),
    __metadata("design:type", comment_min_aggregate_input_1.CommentMinAggregateInput)
], CommentGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_max_aggregate_input_1.CommentMaxAggregateInput, { nullable: true }),
    __metadata("design:type", comment_max_aggregate_input_1.CommentMaxAggregateInput)
], CommentGroupByArgs.prototype, "_max", void 0);
exports.CommentGroupByArgs = CommentGroupByArgs = __decorate([
    (0, graphql_2.ArgsType)()
], CommentGroupByArgs);
//# sourceMappingURL=comment-group-by.args.js.map