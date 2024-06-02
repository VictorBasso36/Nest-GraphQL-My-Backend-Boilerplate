import { Module } from '@nestjs/common';
import { CommentResponseResolver } from './comment-response.resolver';


@Module({
  imports: [],
  providers: [CommentResponseResolver],
})
export class CommentResponseModule {}
