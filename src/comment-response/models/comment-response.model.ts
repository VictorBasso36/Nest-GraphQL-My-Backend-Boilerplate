
import {
  ObjectType,
} from '@nestjs/graphql';
import { CommentResponse } from 'src/@generated/comment-response/comment-response.model';

@ObjectType()
export class CommentResponseModel extends CommentResponse {}
