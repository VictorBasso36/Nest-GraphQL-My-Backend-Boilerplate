import { PrismaService } from 'nestjs-prisma';
import {
  Resolver,
  Query,
  Args,
  Mutation,
  ObjectType,
  Field,
} from '@nestjs/graphql';

import { CompanyCreateInput } from 'src/@generated/company/company-create.input';
import { UpdateOneCompanyArgs } from 'src/@generated/company/update-one-company.args';
import {  } from './models/find-many.model';
import { FindUniqueCompanyArgs } from 'src/@generated/company/find-unique-company.args';
import { Company } from '../@generated/company/company.model';
import { CompanyPaginatedModel } from './models/find-many.model';
import { FindManyCompanyArgs } from 'src/@generated/company/find-many-company.args';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';
import { UseGuards } from '@nestjs/common';
import { UserEntity } from 'src/common/decorators/user.decorator';
import { User } from 'src/@generated/user/user.model';

@Resolver(() => Company)
export class CompanyResolver {
  constructor(
    private prisma: PrismaService,
  ) {}

  @Query(() => CompanyPaginatedModel, { nullable: true })
  async companys(
    @Args() args: FindManyCompanyArgs,
  ) {
    const take = args?.take || 10;
    const skip = args?.skip || 0;
  
    const totalItems = await this.prisma.company.count({
      where: {
        approved: true
      }
    });
  

    const totalPages = Math.ceil(totalItems / take);
  

    const data = await this.prisma.company.findMany({
      ...args,
      take,
      skip,
    });

    const hasNextPage = (skip + take) < totalItems;
    const hasPreviousPage = skip > 0;

    return {
      pageInfo: {
        take,
        hasNextPage,
        hasPreviousPage,
        totalPages,
        totalItems,
        skip,
      },
      nodes: data,
    };
  }

  @Query(() => Company, {nullable: true, name: 'findUniqueCompany'})
  async findOne(@Args() args: FindUniqueCompanyArgs) {
    return await this.prisma.company.findUnique(
      {
        include: {
          User: true
        },
        where: args.where
      }
    )
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Company, {name: 'createCompany'})
  async createCompony(@Args('data') data: CompanyCreateInput) {
    return await this.prisma.company.create({
      data: {
        ...data,
        approved: false,
        ratingCount: 0,
        rating: 0,
      },
    });
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Company, {name: 'updateCompany'})
  async updateCompony(@Args() data: UpdateOneCompanyArgs, @UserEntity() user: User) {

    const company = await this.prisma.company.findUniqueOrThrow({
      where: data?.where,
      include: {
        User: true
      }
    }) 
    console.log(user?.companyId)

    console.log(company?.id)

    if(user?.companyId !== company?.id) throw 'esse usuario nn pertence a essa empresa'

    return await this.prisma.company.update({
      data: {
        ...data?.data,
        approved: company?.approved,
        rating: company?.rating,
        ratingCount: company?.ratingCount
      },
      where: data?.where
    });
  }
  
}
