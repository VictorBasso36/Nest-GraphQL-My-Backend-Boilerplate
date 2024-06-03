import { PrismaService } from 'nestjs-prisma';
import {
  Resolver,
  Query,
  Args,
  Mutation,
} from '@nestjs/graphql';

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
  
    const totalItems = await this.prisma.comment.count();
  

    const totalPages = Math.ceil(totalItems / take);
  

    const data = await this.prisma.comment.findMany({
      ...args,
      take,
      skip,
      include: {
        Company: {
          include: {
            User: true
          }
        },

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

  @Mutation(() => Comment, {name: 'createComment'})
  async createComment(@Args('data') data: CommentCreateInput) {
    return await this.prisma.comment.create({
      data: {
        ...data,
        approved: false
      },
    });
  }

  @Mutation(() => Comment, {name: 'updateComment'})
  async updateComment(@Args() data: UpdateOneCommentArgs) {
    return await this.prisma.comment.update({
      data: data?.data,
      where: data?.where
    });
  }
  
}
