"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOrderByRelevanceFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var UserOrderByRelevanceFieldEnum;
(function (UserOrderByRelevanceFieldEnum) {
    UserOrderByRelevanceFieldEnum["id"] = "id";
    UserOrderByRelevanceFieldEnum["email"] = "email";
    UserOrderByRelevanceFieldEnum["password"] = "password";
    UserOrderByRelevanceFieldEnum["firstname"] = "firstname";
    UserOrderByRelevanceFieldEnum["lastname"] = "lastname";
    UserOrderByRelevanceFieldEnum["resetPasswordToken"] = "resetPasswordToken";
    UserOrderByRelevanceFieldEnum["companyId"] = "companyId";
})(UserOrderByRelevanceFieldEnum || (exports.UserOrderByRelevanceFieldEnum = UserOrderByRelevanceFieldEnum = {}));
(0, graphql_1.registerEnumType)(UserOrderByRelevanceFieldEnum, { name: 'UserOrderByRelevanceFieldEnum', description: undefined });
//# sourceMappingURL=user-order-by-relevance-field.enum.js.map