"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentOrderByRelevanceFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var CommentOrderByRelevanceFieldEnum;
(function (CommentOrderByRelevanceFieldEnum) {
    CommentOrderByRelevanceFieldEnum["id"] = "id";
    CommentOrderByRelevanceFieldEnum["title"] = "title";
    CommentOrderByRelevanceFieldEnum["serviceType"] = "serviceType";
    CommentOrderByRelevanceFieldEnum["content"] = "content";
    CommentOrderByRelevanceFieldEnum["companyId"] = "companyId";
    CommentOrderByRelevanceFieldEnum["userId"] = "userId";
})(CommentOrderByRelevanceFieldEnum || (exports.CommentOrderByRelevanceFieldEnum = CommentOrderByRelevanceFieldEnum = {}));
(0, graphql_1.registerEnumType)(CommentOrderByRelevanceFieldEnum, { name: 'CommentOrderByRelevanceFieldEnum', description: undefined });
//# sourceMappingURL=comment-order-by-relevance-field.enum.js.map