import { PrismaService } from 'nestjs-prisma';
import { Injectable, BadRequestException } from '@nestjs/common';
import { PasswordService } from '../auth/password.service';


@Injectable()
export class CommentService {
  constructor(
    private prisma: PrismaService,
    private passwordService: PasswordService,
  ) {}

}
