import { PrismaService } from 'nestjs-prisma';
import { CompanyCreateInput } from 'src/@generated/company/company-create.input';
import { UpdateOneCompanyArgs } from 'src/@generated/company/update-one-company.args';
import { FindUniqueCompanyArgs } from 'src/@generated/company/find-unique-company.args';
import { FindManyCompanyArgs } from 'src/@generated/company/find-many-company.args';
import { User } from 'src/@generated/user/user.model';
export declare class CompanyResolver {
    private prisma;
    constructor(prisma: PrismaService);
    companys(args: FindManyCompanyArgs): Promise<{
        pageInfo: {
            take: number;
            hasNextPage: boolean;
            hasPreviousPage: boolean;
            totalPages: number;
            totalItems: number;
            skip: number;
        };
        nodes: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            cnpj: string;
            location: string;
            description: string;
            urlImage: string;
            working: string;
            approved: boolean;
            name: string;
            ratingCount: number;
            rating: number;
        }[];
    }>;
    findOne(args: FindUniqueCompanyArgs): Promise<{
        User: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            password: string;
            firstname: string;
            lastname: string;
            role: import(".prisma/client").$Enums.Role;
            resetPasswordToken: string;
            resetPasswordExpires: Date;
            companyId: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        cnpj: string;
        location: string;
        description: string;
        urlImage: string;
        working: string;
        approved: boolean;
        name: string;
        ratingCount: number;
        rating: number;
    }>;
    createCompony(data: CompanyCreateInput): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        cnpj: string;
        location: string;
        description: string;
        urlImage: string;
        working: string;
        approved: boolean;
        name: string;
        ratingCount: number;
        rating: number;
    }>;
    updateCompony(data: UpdateOneCompanyArgs, user: User): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        cnpj: string;
        location: string;
        description: string;
        urlImage: string;
        working: string;
        approved: boolean;
        name: string;
        ratingCount: number;
        rating: number;
    }>;
}
