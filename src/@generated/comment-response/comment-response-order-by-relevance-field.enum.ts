import { registerEnumType } from '@nestjs/graphql';

export enum CommentResponseOrderByRelevanceFieldEnum {
    id = "id",
    CommentId = "CommentId",
    content = "content"
}


registerEnumType(CommentResponseOrderByRelevanceFieldEnum, { name: 'CommentResponseOrderByRelevanceFieldEnum', description: undefined })
