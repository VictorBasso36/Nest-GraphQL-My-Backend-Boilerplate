"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDirection = void 0;
const graphql_1 = require("@nestjs/graphql");
var OrderDirection;
(function (OrderDirection) {
    OrderDirection["asc"] = "asc";
    OrderDirection["desc"] = "desc";
})(OrderDirection || (exports.OrderDirection = OrderDirection = {}));
(0, graphql_1.registerEnumType)(OrderDirection, {
    name: 'OrderDirection',
    description: 'Possible directions in which to order a list of items when provided an `orderBy` argument.',
});
//# sourceMappingURL=order-direction.js.map