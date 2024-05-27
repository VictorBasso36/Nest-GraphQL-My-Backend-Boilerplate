import { PrismaService } from 'nestjs-prisma';
import {
  Resolver,
  Query,
  Args,
} from '@nestjs/graphql';
import { CompanyWhereInput } from 'src/@generated/company/company-where.input';
import { Company } from '../@generated/company/company.model';

@Resolver(() => Company)
export class CompanyResolver {
  constructor(
    private prisma: PrismaService,
  ) {}

  @Query(() => [Company])
  async companys(@Args('where') where: CompanyWhereInput) {
    return await this.prisma.company.findMany({
      where
    });
  }
  
}
