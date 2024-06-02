import { registerEnumType } from '@nestjs/graphql';

export enum CompanyOrderByRelevanceFieldEnum {
    id = "id",
    cnpj = "cnpj",
    location = "location",
    description = "description",
    urlImage = "urlImage",
    working = "working",
    name = "name"
}


registerEnumType(CompanyOrderByRelevanceFieldEnum, { name: 'CompanyOrderByRelevanceFieldEnum', description: undefined })
