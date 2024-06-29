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
exports.CompanyPaginatedModel = void 0;
const graphql_1 = require("@nestjs/graphql");
const company_model_1 = require("../../@generated/company/company.model");
const page_info_model_1 = require("../../common/pagination/page-info.model");
let CompanyPaginatedModel = exports.CompanyPaginatedModel = class CompanyPaginatedModel {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => page_info_model_1.PageInfo, { nullable: true }),
    __metadata("design:type", page_info_model_1.PageInfo)
], CompanyPaginatedModel.prototype, "pageInfo", void 0);
__decorate([
    (0, graphql_1.Field)(() => [company_model_1.Company], {}),
    __metadata("design:type", Array)
], CompanyPaginatedModel.prototype, "nodes", void 0);
exports.CompanyPaginatedModel = CompanyPaginatedModel = __decorate([
    (0, graphql_1.ObjectType)()
], CompanyPaginatedModel);
//# sourceMappingURL=find-many.model.js.map