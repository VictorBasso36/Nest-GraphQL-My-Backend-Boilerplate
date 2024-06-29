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
exports.CommentResponseAggregateArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const comment_response_where_input_1 = require("./comment-response-where.input");
const class_transformer_1 = require("class-transformer");
const comment_response_order_by_with_relation_and_search_relevance_input_1 = require("./comment-response-order-by-with-relation-and-search-relevance.input");
const client_1 = require("@prisma/client");
const comment_response_where_unique_input_1 = require("./comment-response-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const comment_response_count_aggregate_input_1 = require("./comment-response-count-aggregate.input");
const comment_response_min_aggregate_input_1 = require("./comment-response-min-aggregate.input");
const comment_response_max_aggregate_input_1 = require("./comment-response-max-aggregate.input");
let CommentResponseAggregateArgs = exports.CommentResponseAggregateArgs = class CommentResponseAggregateArgs {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => comment_response_where_input_1.CommentResponseWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => comment_response_where_input_1.CommentResponseWhereInput),
    __metadata("design:type", comment_response_where_input_1.CommentResponseWhereInput)
], CommentResponseAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comment_response_order_by_with_relation_and_search_relevance_input_1.CommentResponseOrderByWithRelationAndSearchRelevanceInput], { nullable: true }),
    __metadata("design:type", Array)
], CommentResponseAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_response_where_unique_input_1.CommentResponseWhereUniqueInput, { nullable: true }),
    __metadata("design:type", Object)
], CommentResponseAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], CommentResponseAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], CommentResponseAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_response_count_aggregate_input_1.CommentResponseCountAggregateInput, { nullable: true }),
    __metadata("design:type", comment_response_count_aggregate_input_1.CommentResponseCountAggregateInput)
], CommentResponseAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_response_min_aggregate_input_1.CommentResponseMinAggregateInput, { nullable: true }),
    __metadata("design:type", comment_response_min_aggregate_input_1.CommentResponseMinAggregateInput)
], CommentResponseAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => comment_response_max_aggregate_input_1.CommentResponseMaxAggregateInput, { nullable: true }),
    __metadata("design:type", comment_response_max_aggregate_input_1.CommentResponseMaxAggregateInput)
], CommentResponseAggregateArgs.prototype, "_max", void 0);
exports.CommentResponseAggregateArgs = CommentResponseAggregateArgs = __decorate([
    (0, graphql_2.ArgsType)()
], CommentResponseAggregateArgs);
//# sourceMappingURL=comment-response-aggregate.args.js.map