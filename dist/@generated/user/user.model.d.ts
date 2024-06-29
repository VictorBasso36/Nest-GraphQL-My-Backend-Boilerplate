import { Role } from '../prisma/role.enum';
import { Company } from '../company/company.model';
import { Comment } from '../comment/comment.model';
import { UserCount } from './user-count.output';
export declare class User {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    email: string;
    password: string;
    firstname: string | null;
    lastname: string | null;
    role: keyof typeof Role;
    resetPasswordToken: string | null;
    resetPasswordExpires: Date | null;
    companyId: string | null;
    Company?: Company | null;
    Comment?: Array<Comment>;
    _count?: UserCount;
}
