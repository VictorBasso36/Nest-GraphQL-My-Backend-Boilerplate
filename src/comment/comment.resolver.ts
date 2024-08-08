import { PrismaService } from 'nestjs-prisma';
import {
  Resolver,
  Query,
  Args,
  Mutation,
} from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';
import { ConflictException, UseGuards } from '@nestjs/common';
import { CommentCreateInput } from 'src/@generated/comment/comment-create.input';
import { UpdateOneCommentArgs } from 'src/@generated/comment/update-one-comment.args';
import { FindManyCommentArgs } from 'src/@generated/comment/find-many-comment.args';
import { Comment } from '../@generated/comment/comment.model';
import { CommentPaginatedModel } from './models/find-many-comment.model';


@Resolver(() => Comment)
export class CommentResolver {
  constructor(
    private prisma: PrismaService,
  ) {}

  @Query(() => CommentPaginatedModel, {nullable: true})
  async comments(@Args() args: FindManyCommentArgs) {
    const take = args?.take || 10;
    const skip = args?.skip || 0;
  
    const totalItems = await this.prisma.comment.count({
      where: args?.where
    });
  

    const totalPages = Math.ceil(totalItems / take);
  

    const data = await this.prisma.comment.findMany({
      ...args,
      take,
      skip,
      include: {
        Company: true,
        User: {
          include: {
            Company: true
          },
          
        }

      }
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
  @Mutation(() => Comment, {name: 'createComment'})
  async createComment(@Args('data') data: CommentCreateInput) {

    if(!data?.serviceType) throw new ConflictException(`você não enviou o tipo de serviço.`);
    if(!data?.content) throw new ConflictException(`você não a descrição do serviço prestado.`);
    if(!data?.title) throw new ConflictException(`você não enviou o título da avaliação.`);
    
    const company = await this.prisma.company.findUniqueOrThrow({
      where: {
        id: data?.Company?.connect?.id
      }
    })

    let newRating = data?.rating; 

    let newAverageRating = ((company?.rating * company?.ratingCount) + newRating) / (company?.ratingCount + 1);

    await this.prisma.company.update({
      where: {
        id: data?.Company?.connect?.id
      },
      data: {
        ratingCount: company?.ratingCount + 1,
        rating: newAverageRating 
      }
    })

    return await this.prisma.comment.create({
      data: {
        ...data,
        approved: false
      },
    });
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Comment, {name: 'updateComment'})
  async updateComment(@Args() data: UpdateOneCommentArgs) {
    return await this.prisma.comment.update({
      data: data?.data,
      where: data?.where
    });
  }
  
}
