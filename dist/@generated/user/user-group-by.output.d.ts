import { Role } from '../prisma/role.enum';
import { UserCountAggregate } from './user-count-aggregate.output';
import { UserMinAggregate } from './user-min-aggregate.output';
import { UserMaxAggregate } from './user-max-aggregate.output';
export declare class UserGroupBy {
    id: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    email: string;
    password: string;
    firstname?: string;
    lastname?: string;
    role: keyof typeof Role;
    resetPasswordToken?: string;
    resetPasswordExpires?: Date | string;
    companyId?: string;
    _count?: UserCountAggregate;
    _min?: UserMinAggregate;
    _max?: UserMaxAggregate;
}
