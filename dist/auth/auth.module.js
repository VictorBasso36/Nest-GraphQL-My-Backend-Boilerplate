"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const config_1 = require("@nestjs/config");
const password_service_1 = require("./password.service");
const gql_auth_guard_1 = require("./gql-auth.guard");
const auth_service_1 = require("./auth.service");
const auth_resolver_1 = require("./auth.resolver");
const jwt_strategy_1 = require("./jwt.strategy");
let AuthModule = exports.AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            jwt_1.JwtModule.registerAsync({
                useFactory: async (configService) => {
                    const securityConfig = configService.get('security');
                    return {
                        secret: configService.get('JWT_ACCESS_SECRET'),
                        signOptions: {
                            expiresIn: securityConfig.expiresIn,
                        },
                    };
                },
                inject: [config_1.ConfigService],
            }),
        ],
        providers: [
            auth_service_1.AuthService,
            auth_resolver_1.AuthResolver,
            jwt_strategy_1.JwtStrategy,
            gql_auth_guard_1.GqlAuthGuard,
            password_service_1.PasswordService,
        ],
        exports: [auth_service_1.AuthService, gql_auth_guard_1.GqlAuthGuard],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map