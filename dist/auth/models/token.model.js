"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_scalars_1 = require("graphql-scalars");
let Token = exports.Token = class Token {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => graphql_scalars_1.GraphQLJWT, { description: 'JWT access token' }),
    __metadata("design:type", String)
], Token.prototype, "accessToken", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_scalars_1.GraphQLJWT, { description: 'JWT refresh token' }),
    __metadata("design:type", String)
], Token.prototype, "refreshToken", void 0);
exports.Token = Token = __decorate([
    (0, graphql_1.ObjectType)()
], Token);
//# sourceMappingURL=token.model.js.map