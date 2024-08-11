import { registerEnumType } from '@nestjs/graphql';

export enum CommentScalarFieldEnum {
    id = "id",
    title = "title",
    serviceType = "serviceType",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    content = "content",
    rating = "rating",
    approved = "approved",
    removed = "removed",
    resolved = "resolved",
    companyId = "companyId",
    userId = "userId"
}


registerEnumType(CommentScalarFieldEnum, { name: 'CommentScalarFieldEnum', description: undefined })
