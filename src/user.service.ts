import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Logger } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async findUserByEmail(email: string) {
    try {
      const user = await this.prisma.user.findUniqueOrThrow({
        where: { email },
      });
      return { id: user.id, password: user.password, email: user.email };
    } catch (error) {
      Logger.error('Error retrieving user:', error);
    }
  }
}
