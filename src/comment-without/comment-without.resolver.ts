import { PrismaService } from 'nestjs-prisma';
import {
  Resolver,
  Query,
  Args,
  Mutation,
} from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';
import { UseGuards } from '@nestjs/common';
import { CommentWithoutCompanyCreateInput } from 'src/@generated/comment-without-company/comment-without-company-create.input';
import { UpdateOneCommentWithoutCompanyArgs } from 'src/@generated/comment-without-company/update-one-comment-without-company.args';
import { FindManyCommentWithoutCompanyArgs } from 'src/@generated/comment-without-company/find-many-comment-without-company.args';
import { CommentWithoutCompany } from 'src/@generated/comment-without-company/comment-without-company.model';
import { CommentWithoutCompanyPaginatedModel } from './models/find-many-comment.model';


@Resolver(() => CommentWithoutCompany)
export class CommentWithoutResolver {
  constructor(
    private prisma: PrismaService,
  ) {}

  @Query(() => CommentWithoutCompanyPaginatedModel, {nullable: true})
  async commentswithout(@Args() args: FindManyCommentWithoutCompanyArgs) {
    const take = args?.take || 10;
    const skip = args?.skip || 0;
  
    const totalItems = await this.prisma.commentWithoutCompany.count({
      where: args?.where
    });
  

    const totalPages = Math.ceil(totalItems / take);
  

    const data = await this.prisma.commentWithoutCompany.findMany({
      ...args,
      include: {
        User: {
          select: {
            Company: {
              include: {
                User: true
              }
            }
          }
        }
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

  @UseGuards(GqlAuthGuard)
  @Mutation(() => CommentWithoutCompany, {name: 'createCommentWithout'})
  async createCommentWithout(@Args('data') data: CommentWithoutCompanyCreateInput) {

    //get company
    return await this.prisma.commentWithoutCompany.create({
      data: {
        ...data,
      },
    });
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => CommentWithoutCompany, {name: 'updateCommentWithout'})
  async updateCommentWithout(@Args() data: UpdateOneCommentWithoutCompanyArgs) {
    return await this.prisma.commentWithoutCompany.update({
      data: data?.data,
      where: data?.where
    });
  }
  
}
