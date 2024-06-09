import { registerEnumType } from '@nestjs/graphql';

export enum CommentScalarFieldEnum {
    id = "id",
    title = "title",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    content = "content",
    rating = "rating",
    approved = "approved",
    companyId = "companyId",
    userId = "userId"
}


registerEnumType(CommentScalarFieldEnum, { name: 'CommentScalarFieldEnum', description: undefined })
