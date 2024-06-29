"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var UserScalarFieldEnum;
(function (UserScalarFieldEnum) {
    UserScalarFieldEnum["id"] = "id";
    UserScalarFieldEnum["createdAt"] = "createdAt";
    UserScalarFieldEnum["updatedAt"] = "updatedAt";
    UserScalarFieldEnum["email"] = "email";
    UserScalarFieldEnum["password"] = "password";
    UserScalarFieldEnum["firstname"] = "firstname";
    UserScalarFieldEnum["lastname"] = "lastname";
    UserScalarFieldEnum["role"] = "role";
    UserScalarFieldEnum["resetPasswordToken"] = "resetPasswordToken";
    UserScalarFieldEnum["resetPasswordExpires"] = "resetPasswordExpires";
    UserScalarFieldEnum["companyId"] = "companyId";
})(UserScalarFieldEnum || (exports.UserScalarFieldEnum = UserScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined });
//# sourceMappingURL=user-scalar-field.enum.js.map