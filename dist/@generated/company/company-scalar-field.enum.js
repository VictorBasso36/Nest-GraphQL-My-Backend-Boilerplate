"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var CompanyScalarFieldEnum;
(function (CompanyScalarFieldEnum) {
    CompanyScalarFieldEnum["id"] = "id";
    CompanyScalarFieldEnum["createdAt"] = "createdAt";
    CompanyScalarFieldEnum["updatedAt"] = "updatedAt";
    CompanyScalarFieldEnum["cnpj"] = "cnpj";
    CompanyScalarFieldEnum["location"] = "location";
    CompanyScalarFieldEnum["description"] = "description";
    CompanyScalarFieldEnum["urlImage"] = "urlImage";
    CompanyScalarFieldEnum["working"] = "working";
    CompanyScalarFieldEnum["approved"] = "approved";
    CompanyScalarFieldEnum["name"] = "name";
    CompanyScalarFieldEnum["ratingCount"] = "ratingCount";
    CompanyScalarFieldEnum["rating"] = "rating";
})(CompanyScalarFieldEnum || (exports.CompanyScalarFieldEnum = CompanyScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(CompanyScalarFieldEnum, { name: 'CompanyScalarFieldEnum', description: undefined });
//# sourceMappingURL=company-scalar-field.enum.js.map