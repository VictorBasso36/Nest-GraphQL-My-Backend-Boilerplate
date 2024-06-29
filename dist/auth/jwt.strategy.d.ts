import { ConfigService } from '@nestjs/config';
import { User } from '@prisma/client';
import { AuthService } from './auth.service';
import { JwtDto } from './dto/jwt.dto';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly authService;
    readonly configService: ConfigService;
    constructor(authService: AuthService, configService: ConfigService);
    validate(payload: JwtDto): Promise<User>;
}
export {};
