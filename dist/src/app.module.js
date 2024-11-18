"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const app_controller_1 = require("./app.controller");
const jwt_1 = require("@nestjs/jwt");
const constants_1 = require("./constants/constants");
const prisma_service_1 = require("../prisma/prisma.service");
const cache_manager_1 = require("@nestjs/cache-manager");
const cache_manager_redis_yet_1 = require("cache-manager-redis-yet");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.register({
                global: true,
                secret: constants_1.jwtConstants.secret,
                signOptions: { expiresIn: '3600s' },
            }),
            cache_manager_1.CacheModule.registerAsync({
                useFactory: async () => {
                    const store = await (0, cache_manager_redis_yet_1.redisStore)({
                        socket: {
                            host: process.env.REDIS_HOST || 'redis',
                            port: Number(process.env.REDIS_PORT) || 6379,
                        },
                    });
                    return {
                        store: store,
                        ttl: 3 * 60000,
                    };
                },
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            prisma_service_1.PrismaService,
        ],
        exports: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map