import { ConfigService } from '@nestjs/config';
export declare class PasswordService {
    private configService;
    get bcryptSaltRounds(): string | number;
    constructor(configService: ConfigService);
    validatePassword(password: string, hashedPassword: string): Promise<boolean>;
    hashPassword(password: string): Promise<string>;
}
