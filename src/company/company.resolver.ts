import { PrismaService } from 'nestjs-prisma';
import {
  Resolver,
  Query,
  Args,
  Mutation,
} from '@nestjs/graphql';

import { CompanyCreateInput } from 'src/@generated/company/company-create.input';
import { FindManyCompanyArgs } from 'src/@generated/company/find-many-company.args';
import { FindUniqueCompanyArgs } from 'src/@generated/company/find-unique-company.args';
import { Company } from '../@generated/company/company.model';

@Resolver(() => Company)
export class CompanyResolver {
  constructor(
    private prisma: PrismaService,
  ) {}

  @Query(() => [Company], {nullable: true})
  async companys(@Args() args: FindManyCompanyArgs) {
    return await this.prisma.company.findMany(
      args
    )
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
      data
    });
  }


  
}
