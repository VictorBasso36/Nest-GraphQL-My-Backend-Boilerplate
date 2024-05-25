import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

@InputType()
export class ForgotPasswordInput {
    @Field()
    @IsEmail()
    email: string;
}

@InputType()
export class ForgotPasswordResponse {
  @Field()
  success: boolean;

  @Field({ nullable: true })
  message?: string;
}
