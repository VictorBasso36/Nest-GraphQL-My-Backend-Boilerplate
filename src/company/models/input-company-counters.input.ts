
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class InputCompanyCounters {
  @Field()
  @IsString()
  CompanyId: string;

}
