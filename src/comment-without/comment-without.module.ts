import { Module } from '@nestjs/common';
import { CommentWithoutResolver } from './comment-without.resolver';


@Module({
  imports: [],
  providers: [CommentWithoutResolver],
})
export class CommentWithoutModule {}
