import { PrismaService } from 'nestjs-prisma';
import {
  Resolver,
  Query,
  Args,
  Mutation,
} from '@nestjs/graphql';

import { CommentResponseCreateInput } from 'src/@generated/comment-response/comment-response-create.input';
import { UpdateOneCommentResponseArgs } from 'src/@generated/comment-response/update-one-comment-response.args';
import { FindManyCommentResponseArgs } from 'src/@generated/comment-response/find-many-comment-response.args';
import { CommentResponse } from '../@generated/comment-response/comment-response.model';
import { CommentResponsePaginatedModel } from './models/find-many-comment-response.model';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';
import { UseGuards } from '@nestjs/common';

@Resolver(() => CommentResponse)
export class CommentResponseResolver {
  constructor(
    private prisma: PrismaService,
  ) {}

  @Query(() => CommentResponsePaginatedModel, {nullable: true})
  async CommentResponses(@Args() args: FindManyCommentResponseArgs) {
    const take = args?.take || 10;
    const skip = args?.skip || 0;
  
    const totalItems = await this.prisma.commentResponse.count();
  

    const totalPages = Math.ceil(totalItems / take);
  

    const data = await this.prisma.commentResponse.findMany({
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

  @UseGuards(GqlAuthGuard)
  @Mutation(() => CommentResponse, {name: 'createCommentResponse', nullable: true})
  async createCommentResponse(@Args('data') data: CommentResponseCreateInput) {
    return await this.prisma.commentResponse.create({
      data: {
        ...data,
        approved: true
      },
    });
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => CommentResponse, {name: 'updateCommentResponse'})
  async updateCommentResponse(@Args() data: UpdateOneCommentResponseArgs) {
    return await this.prisma.commentResponse.update({
      data: data?.data,
      where: data?.where
    });
  }
  
}
