import { registerEnumType } from '@nestjs/graphql';

export enum CommentResponseScalarFieldEnum {
    id = "id",
    CommentId = "CommentId",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    content = "content"
}


registerEnumType(CommentResponseScalarFieldEnum, { name: 'CommentResponseScalarFieldEnum', description: undefined })
