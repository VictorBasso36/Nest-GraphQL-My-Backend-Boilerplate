
import {
  ObjectType,
} from '@nestjs/graphql';
import { Comment } from 'src/@generated/comment/comment.model';

@ObjectType()
export class CommentModel extends Comment {}
