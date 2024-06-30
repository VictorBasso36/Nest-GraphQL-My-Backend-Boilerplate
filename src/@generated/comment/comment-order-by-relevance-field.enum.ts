import { registerEnumType } from '@nestjs/graphql';

export enum CommentOrderByRelevanceFieldEnum {
    id = "id",
    title = "title",
    serviceType = "serviceType",
    content = "content",
    companyId = "companyId",
    userId = "userId"
}


registerEnumType(CommentOrderByRelevanceFieldEnum, { name: 'CommentOrderByRelevanceFieldEnum', description: undefined })
