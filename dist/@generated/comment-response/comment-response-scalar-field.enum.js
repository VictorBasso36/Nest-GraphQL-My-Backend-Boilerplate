"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentResponseScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var CommentResponseScalarFieldEnum;
(function (CommentResponseScalarFieldEnum) {
    CommentResponseScalarFieldEnum["id"] = "id";
    CommentResponseScalarFieldEnum["CommentId"] = "CommentId";
    CommentResponseScalarFieldEnum["approved"] = "approved";
    CommentResponseScalarFieldEnum["createdAt"] = "createdAt";
    CommentResponseScalarFieldEnum["updatedAt"] = "updatedAt";
    CommentResponseScalarFieldEnum["content"] = "content";
})(CommentResponseScalarFieldEnum || (exports.CommentResponseScalarFieldEnum = CommentResponseScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(CommentResponseScalarFieldEnum, { name: 'CommentResponseScalarFieldEnum', description: undefined });
//# sourceMappingURL=comment-response-scalar-field.enum.js.map