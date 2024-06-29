"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
const graphql_1 = require("@nestjs/graphql");
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role["USER"] = "USER";
})(Role || (exports.Role = Role = {}));
(0, graphql_1.registerEnumType)(Role, { name: 'Role', description: undefined });
//# sourceMappingURL=role.enum.js.map