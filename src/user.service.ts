import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

// import { Cache } from 'cache-manager';
// import { CACHE_MANAGER } from '@nestjs/cache-manager';
// import { Logger } from '@nestjs/common';

// TODO: add try/catch where needed
@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
    // @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  // TODO: add foltering, sorting, pagination
  // async findAll() {
  //   Logger.log('GET all users');
  //   const value = await this.cacheManager.get('allUsers');

  //   if (value) {
  //     Logger.log('"allUsers" has been taken from cache');
  //     return value;
  //   } else {
  //     const result = await this.prisma.user.findMany({
  //       include: {
  //         groups: true,
  //       },
  //     });
  //     await this.cacheManager.set('allUsers', result);
  //     Logger.log("'allUsers' has been cached");
  //     return result;
  //   }
  // }

  // async findOne(id: number) {
  //   const result = await this.prisma.user.findUniqueOrThrow({
  //     where: { id: id },
  //     include: { groups: true },
  //   });

  //   return result;
  // }

  async findUserByEmail(email: string) {
    try {
      const user = await this.prisma.user.findUniqueOrThrow({
        where: { email },
      });
      return { id: user.id, password: user.password, email: user.email };
    } catch (error) {
      console.error('Error retrieving user:', error);
    }
  }
}
