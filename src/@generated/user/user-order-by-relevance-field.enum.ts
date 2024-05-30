import { registerEnumType } from '@nestjs/graphql';

export enum UserOrderByRelevanceFieldEnum {
    id = "id",
    email = "email",
    password = "password",
    firstname = "firstname",
    lastname = "lastname",
    resetPasswordToken = "resetPasswordToken",
    companyId = "companyId"
}


registerEnumType(UserOrderByRelevanceFieldEnum, { name: 'UserOrderByRelevanceFieldEnum', description: undefined })
