import { PrismaService } from 'nestjs-prisma';
import {
  Resolver,
  Query,
  Args,
  Mutation,
  ObjectType,
  Field,
  ResolveField,
  Parent,
} from '@nestjs/graphql';

import { CompanyCreateInput } from 'src/@generated/company/company-create.input';
import { UpdateOneCompanyArgs } from 'src/@generated/company/update-one-company.args';
import { FindUniqueCompanyArgs } from 'src/@generated/company/find-unique-company.args';
import { Company } from '../@generated/company/company.model';
import { CompanyPaginatedModel } from './models/find-many.model';
import { FindManyCompanyArgs } from 'src/@generated/company/find-many-company.args';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';
import { ConflictException, UseGuards } from '@nestjs/common';
import { UserEntity } from 'src/common/decorators/user.decorator';
import { User } from 'src/@generated/user/user.model';
import { CountersModels } from './models/company-counters.model';
import { InputCompanyCounters } from './models/input-company-counters.input';

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
      where: args.where ? args.where : undefined
    });
  

    const totalPages = Math.ceil(totalItems / take);
  

    const data = await this.prisma.company.findMany({
      ...args,
      include: {
        User: true,
      },
      
    
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
        where: {
          ...args.where,
          
        }
      }
    )
  }

  @ResolveField(() => CountersModels, {nullable: true, name:'counters'})
  async getCounter(@Parent() company: Company) {
    const id = company.id;
    return this.getCountersCompany({ where: { id } });
  }

  @Query(() => CountersModels, {nullable: true, name: 'companyCounters'})
  async getCountersCompany(@Args() args: FindUniqueCompanyArgs){
    
    const ratingCount = await this.prisma.comment.count({
      where: {
        approved: true,
        companyId: args?.where?.id
      }
    })


    const resolvedRatingCount = await this.prisma.comment.count({
      where: {
        approved: true,
        resolved: true,
        companyId: args?.where?.id,
        CommentResponse: {
          every: {}
        }
      }
    })

    const notresolvedRatingCount = await this.prisma.comment.count({
      where: {
        approved: true,
        resolved: false,
        companyId: args?.where?.id,
        CommentResponse: {
          every: {}
        }
      }
    })

    const ratingNoResponse = await this.prisma.comment.count({
      where: {
        companyId: args?.where?.id,
        approved: true,
        CommentResponse: {
          none: {}
        }
      }
    })

    return {
     
      ratingCount: ratingCount || 0,
      resolvedRatingCount: resolvedRatingCount || 0,
      notresolvedRatingCount: notresolvedRatingCount || 0,
      ratingNoResponse: ratingNoResponse || 0,
    }
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Company, {name: 'createCompany'})
  async createCompony(@Args('data') data: CompanyCreateInput) {
    if(!data?.name) throw new ConflictException(`você não o nome da empresa.`);
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

    if(user?.companyId !== company?.id) {
      if(user?.role !== 'ADMIN') { 
        return company 
      }
    }
    
    return await this.prisma.company.update({
      data: {
        ...data?.data,
      },
      where: data?.where
    });
  }
}
