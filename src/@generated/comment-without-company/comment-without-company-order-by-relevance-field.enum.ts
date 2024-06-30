import { registerEnumType } from '@nestjs/graphql';

export enum CommentWithoutCompanyOrderByRelevanceFieldEnum {
    id = "id",
    cnpj = "cnpj",
    title = "title",
    serviceType = "serviceType",
    content = "content",
    userId = "userId"
}


registerEnumType(CommentWithoutCompanyOrderByRelevanceFieldEnum, { name: 'CommentWithoutCompanyOrderByRelevanceFieldEnum', description: undefined })
