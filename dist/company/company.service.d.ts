import { PrismaService } from 'nestjs-prisma';
import { PasswordService } from '../auth/password.service';
export declare class CompanyService {
    private prisma;
    private passwordService;
    constructor(prisma: PrismaService, passwordService: PasswordService);
}
