import { registerEnumType } from '@nestjs/graphql';

export enum CommentResponseScalarFieldEnum {
    id = "id",
    CommentId = "CommentId",
    approved = "approved",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    content = "content"
}


registerEnumType(CommentResponseScalarFieldEnum, { name: 'CommentResponseScalarFieldEnum', description: undefined })
