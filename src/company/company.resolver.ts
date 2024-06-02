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
import { ExtendedFindManyCompanyArgs } from './dto/find-many.input';
import { FindManyCompanyArgs } from 'src/@generated/company/find-many-company.args';
import { PageInfoInput } from 'src/common/pagination/page-info-input.model';

@Resolver(() => Company)
export class CompanyResolver {
  constructor(
    private prisma: PrismaService,
  ) {}

  @Query(() => CompanyPaginatedModel, { nullable: true })
  async companys(
    @Args() args: FindManyCompanyArgs,
    //@Args('page') pageInfo: PageInfoInput,
  ) {
    
    // const {pageInfo, ...otherArgs} = args
  
    const data = await this.prisma.company.findMany(
      {...args}
    )
  
    return {
      pageInfo: {
        take: args?.take,
  
        hasNextPage: false,

        hasPreviousPage: false,
      
    
        totalPages: 100,
      
        totalItems: 100,
      
        
        skip: args?.take
      
      },
      nodes: data
    }
  }

  @Query(() => Company, {nullable: true, name: 'findUniqueCompany'})
  async findOne(@Args() args: FindUniqueCompanyArgs) {
    return await this.prisma.company.findUnique(
      args
    )
  }

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

  @Mutation(() => Company, {name: 'updateCompany'})
  async updateCompony(@Args() data: UpdateOneCompanyArgs) {
    return await this.prisma.company.update({
      data: data?.data,
      where: data?.where
    });
  }
  
}
