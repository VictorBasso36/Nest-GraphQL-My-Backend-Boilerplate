import { registerEnumType } from '@nestjs/graphql';

export enum CompanyOrderByRelevanceFieldEnum {
    id = "id",
    cnpj = "cnpj",
    location = "location",
    name = "name"
}


registerEnumType(CompanyOrderByRelevanceFieldEnum, { name: 'CompanyOrderByRelevanceFieldEnum', description: undefined })
