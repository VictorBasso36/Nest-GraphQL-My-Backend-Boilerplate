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

@Resolver(() => CommentResponse)
export class CommentResponseResolver {
  constructor(
    private prisma: PrismaService,
  ) {}

  @Query(() => [CommentResponse], {nullable: true})
  async CommentResponses(@Args() args: FindManyCommentResponseArgs) {
    return await this.prisma.commentResponse.findMany(
      args
    )
  }

  @Mutation(() => CommentResponse, {name: 'createComment'})
  async createCommentResponse(@Args('data') data: CommentResponseCreateInput) {
    return await this.prisma.commentResponse.create({
      data: {
        ...data,
        approved: false
      },
    });
  }

  @Mutation(() => CommentResponse, {name: 'updateCommentResponse'})
  async updateCommentResponse(@Args() data: UpdateOneCommentResponseArgs) {
    return await this.prisma.commentResponse.update({
      data: data?.data,
      where: data?.where
    });
  }
  
}
