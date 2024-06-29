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
exports.PageInfo = void 0;
const graphql_1 = require("@nestjs/graphql");
let PageInfo = exports.PageInfo = class PageInfo {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], PageInfo.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, {}),
    __metadata("design:type", Boolean)
], PageInfo.prototype, "hasNextPage", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, {}),
    __metadata("design:type", Boolean)
], PageInfo.prototype, "hasPreviousPage", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, {}),
    __metadata("design:type", Number)
], PageInfo.prototype, "totalPages", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, {}),
    __metadata("design:type", Number)
], PageInfo.prototype, "totalItems", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], PageInfo.prototype, "skip", void 0);
exports.PageInfo = PageInfo = __decorate([
    (0, graphql_1.ObjectType)()
], PageInfo);
//# sourceMappingURL=page-info.model.js.map