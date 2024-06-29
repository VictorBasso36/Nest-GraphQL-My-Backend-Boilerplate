"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyOrderByRelevanceFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var CompanyOrderByRelevanceFieldEnum;
(function (CompanyOrderByRelevanceFieldEnum) {
    CompanyOrderByRelevanceFieldEnum["id"] = "id";
    CompanyOrderByRelevanceFieldEnum["cnpj"] = "cnpj";
    CompanyOrderByRelevanceFieldEnum["location"] = "location";
    CompanyOrderByRelevanceFieldEnum["description"] = "description";
    CompanyOrderByRelevanceFieldEnum["urlImage"] = "urlImage";
    CompanyOrderByRelevanceFieldEnum["working"] = "working";
    CompanyOrderByRelevanceFieldEnum["name"] = "name";
})(CompanyOrderByRelevanceFieldEnum || (exports.CompanyOrderByRelevanceFieldEnum = CompanyOrderByRelevanceFieldEnum = {}));
(0, graphql_1.registerEnumType)(CompanyOrderByRelevanceFieldEnum, { name: 'CompanyOrderByRelevanceFieldEnum', description: undefined });
//# sourceMappingURL=company-order-by-relevance-field.enum.js.map