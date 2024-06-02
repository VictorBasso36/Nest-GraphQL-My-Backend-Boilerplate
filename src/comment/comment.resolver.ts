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

@Resolver(() => Comment)
export class CommentResolver {
  constructor(
    private prisma: PrismaService,
  ) {}

  @Query(() => [Comment], {nullable: true})
  async comments(@Args() args: FindManyCommentArgs) {
    return await this.prisma.comment.findMany(
      args
    )
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
