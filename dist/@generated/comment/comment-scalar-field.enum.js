"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var CommentScalarFieldEnum;
(function (CommentScalarFieldEnum) {
    CommentScalarFieldEnum["id"] = "id";
    CommentScalarFieldEnum["title"] = "title";
    CommentScalarFieldEnum["serviceType"] = "serviceType";
    CommentScalarFieldEnum["content"] = "content";
    CommentScalarFieldEnum["createdAt"] = "createdAt";
    CommentScalarFieldEnum["updatedAt"] = "updatedAt";
    CommentScalarFieldEnum["rating"] = "rating";
    CommentScalarFieldEnum["approved"] = "approved";
    CommentScalarFieldEnum["removed"] = "removed";
    CommentScalarFieldEnum["companyId"] = "companyId";
    CommentScalarFieldEnum["userId"] = "userId";
})(CommentScalarFieldEnum || (exports.CommentScalarFieldEnum = CommentScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(CommentScalarFieldEnum, { name: 'CommentScalarFieldEnum', description: undefined });
//# sourceMappingURL=comment-scalar-field.enum.js.map