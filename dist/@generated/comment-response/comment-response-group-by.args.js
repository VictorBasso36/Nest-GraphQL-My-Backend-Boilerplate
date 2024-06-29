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
exports.CommentResponseGroupByArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const comment_response_where_input_1 = require("./comment-response-where.input");
const class_transformer_1 = require("class-transformer");
const comment_response_order_by_with_aggregation_input_1 = require("./comment-response-order-by-with-aggregation.input");
const comment_response_scalar_field_enum_1 = require("./comment-response-scalar-field.enum");
const comment_response_scalar_where_with_aggregates_input_1 = require("./comment-response-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const comment_response_count_aggregate_input_1 = require("./comment-response-count-aggregate.input");
const comment_response_min_aggregate_input_1 = require("./comment-response-min-aggregate.input");
const comment_response_max_aggregate_input_1 = require("./comment-response-max-aggregate.input");
let CommentResponseGroupByArgs = exports.CommentResponseGroupByArgs = class CommentResponseGroupByArgs {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => comment_response_where_input_1.CommentResponseWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => comment_response_where_input_1.CommentResponseWhereInput),
    __metadata("design:type", comment_response_where_input_1.CommentResponseWhereInput)
], CommentResponseGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comment_response_order_by_with_aggregation_input_1.CommentResponseOrderByWithAggregationInput], { nullable: true }),
    __metadata("design:type", Array)
], CommentResponseGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comment_response_scalar_field_enum_1.CommentResponseScalarFieldEnum], { nullable: false }),
    __metadata("design:type", Array)
], CommentResponseGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_response_scalar_where_with_aggregates_input_1.CommentResponseScalarWhereWithAggregatesInput, { nullable: true }),
    __metadata("design:type", comment_response_scalar_where_with_aggregates_input_1.CommentResponseScalarWhereWithAggregatesInput)
], CommentResponseGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], CommentResponseGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], CommentResponseGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_response_count_aggregate_input_1.CommentResponseCountAggregateInput, { nullable: true }),
    __metadata("design:type", comment_response_count_aggregate_input_1.CommentResponseCountAggregateInput)
], CommentResponseGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_response_min_aggregate_input_1.CommentResponseMinAggregateInput, { nullable: true }),
    __metadata("design:type", comment_response_min_aggregate_input_1.CommentResponseMinAggregateInput)
], CommentResponseGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_response_max_aggregate_input_1.CommentResponseMaxAggregateInput, { nullable: true }),
    __metadata("design:type", comment_response_max_aggregate_input_1.CommentResponseMaxAggregateInput)
], CommentResponseGroupByArgs.prototype, "_max", void 0);
exports.CommentResponseGroupByArgs = CommentResponseGroupByArgs = __decorate([
    (0, graphql_2.ArgsType)()
], CommentResponseGroupByArgs);
//# sourceMappingURL=comment-response-group-by.args.js.map