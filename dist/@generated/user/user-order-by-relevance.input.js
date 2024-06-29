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
exports.UserOrderByRelevanceInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_order_by_relevance_field_enum_1 = require("./user-order-by-relevance-field.enum");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
let UserOrderByRelevanceInput = exports.UserOrderByRelevanceInput = class UserOrderByRelevanceInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => [user_order_by_relevance_field_enum_1.UserOrderByRelevanceFieldEnum], { nullable: false }),
    __metadata("design:type", Array)
], UserOrderByRelevanceInput.prototype, "fields", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: false }),
    __metadata("design:type", Object)
], UserOrderByRelevanceInput.prototype, "sort", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], UserOrderByRelevanceInput.prototype, "search", void 0);
exports.UserOrderByRelevanceInput = UserOrderByRelevanceInput = __decorate([
    (0, graphql_2.InputType)()
], UserOrderByRelevanceInput);
//# sourceMappingURL=user-order-by-relevance.input.js.map