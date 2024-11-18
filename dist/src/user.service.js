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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const cache_manager_1 = require("@nestjs/cache-manager");
const common_2 = require("@nestjs/common");
let UsersService = class UsersService {
    constructor(prisma, cacheManager) {
        this.prisma = prisma;
        this.cacheManager = cacheManager;
    }
    async findAll() {
        common_2.Logger.log('GET all users');
        const value = await this.cacheManager.get('allUsers');
        if (value) {
            common_2.Logger.log('"allUsers" has been taken from cache');
            return value;
        }
        else {
            const result = await this.prisma.user.findMany({
                include: {
                    groups: true,
                },
            });
            await this.cacheManager.set('allUsers', result);
            common_2.Logger.log("'allUsers' has been cached");
            return result;
        }
    }
    async findOne(id) {
        const result = await this.prisma.user.findUniqueOrThrow({
            where: { id: id },
            include: { groups: true },
        });
        return result;
    }
    async findUserByEmail(email) {
        try {
            const user = await this.prisma.user.findUniqueOrThrow({
                where: { email },
                include: { groups: true },
            });
            return user;
        }
        catch (error) {
            console.error('Error retrieving user:', error);
        }
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)(cache_manager_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, Object])
], UsersService);
//# sourceMappingURL=user.service.js.map