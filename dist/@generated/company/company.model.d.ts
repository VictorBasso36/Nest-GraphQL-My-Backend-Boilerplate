import { User } from '../user/user.model';
import { Comment } from '../comment/comment.model';
import { CompanyCount } from './company-count.output';
export declare class Company {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    cnpj: string;
    location: string;
    description: string | null;
    urlImage: string | null;
    working: string | null;
    approved: boolean | null;
    name: string;
    ratingCount: number | null;
    rating: number | null;
    User?: Array<User>;
    Comment?: Array<Comment>;
    _count?: CompanyCount;
}
