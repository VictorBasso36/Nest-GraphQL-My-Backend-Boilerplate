import { registerEnumType } from '@nestjs/graphql';

export enum CommentWithoutCompanyScalarFieldEnum {
    id = "id",
    cnpj = "cnpj",
    rating = "rating",
    title = "title",
    serviceType = "serviceType",
    content = "content",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    userId = "userId"
}


registerEnumType(CommentWithoutCompanyScalarFieldEnum, { name: 'CommentWithoutCompanyScalarFieldEnum', description: undefined })
