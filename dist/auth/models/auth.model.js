"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
const eager_import_0 = require("../../@generated/user/user.model");
const graphql_1 = require("@nestjs/graphql");
const token_model_1 = require("./token.model");
let Auth = exports.Auth = class Auth extends token_model_1.Token {
    static _GRAPHQL_METADATA_FACTORY() {
        return { user: { type: () => require("../../@generated/user/user.model").User } };
    }
};
exports.Auth = Auth = __decorate([
    (0, graphql_1.ObjectType)()
], Auth);
//# sourceMappingURL=auth.model.js.map