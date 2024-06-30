import { PrismaService } from 'nestjs-prisma';
import { Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class CommentWithoutService {
  constructor(
    private prisma: PrismaService,
  ) {}

}
