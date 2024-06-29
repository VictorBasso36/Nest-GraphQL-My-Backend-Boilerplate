import { User } from '../../@generated/user/user.model';
import { Token } from './token.model';
export declare class Auth extends Token {
    user: User;
}
