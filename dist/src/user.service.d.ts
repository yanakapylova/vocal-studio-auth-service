import { PrismaService } from 'prisma/prisma.service';
import { Cache } from 'cache-manager';
export declare class UsersService {
    private readonly prisma;
    private cacheManager;
    constructor(prisma: PrismaService, cacheManager: Cache);
    findAll(): Promise<any>;
    findOne(id: number): Promise<any>;
    findUserByEmail(email: string): Promise<any>;
}
