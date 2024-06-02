import { PrismaService } from 'nestjs-prisma';
import { Injectable, BadRequestException } from '@nestjs/common';
import { PasswordService } from '../auth/password.service';


@Injectable()
export class CommentResponseService {
  constructor(
    private prisma: PrismaService,
    private passwordService: PasswordService,
  ) {}

}
