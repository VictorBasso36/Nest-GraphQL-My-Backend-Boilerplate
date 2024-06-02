import { registerEnumType } from '@nestjs/graphql';

export enum CompanyScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    cnpj = "cnpj",
    location = "location",
    description = "description",
    urlImage = "urlImage",
    working = "working",
    approved = "approved",
    name = "name",
    ratingCount = "ratingCount",
    rating = "rating"
}


registerEnumType(CompanyScalarFieldEnum, { name: 'CompanyScalarFieldEnum', description: undefined })
