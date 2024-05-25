import { PrismaService } from 'nestjs-prisma';
import {
  Resolver,
  Query,
  Parent,
  Mutation,
  Args,
  ResolveField,
} from '@nestjs/graphql';
import { BadRequestException, UseGuards } from '@nestjs/common';
import { UserEntity } from '../common/decorators/user.decorator';
import { GqlAuthGuard } from '../auth/gql-auth.guard';
import { UsersService } from './users.service';
import { User } from './models/user.model';
import { ChangePasswordInput } from './dto/change-password.input';
import { UpdateUserInput } from './dto/update-user.input';
import { ForgotPasswordInput, ForgotPasswordResponse } from './dto/forgot-password.input';

@Resolver(() => User)
@UseGuards(GqlAuthGuard)
export class UsersResolver {
  constructor(
    private usersService: UsersService,
    private prisma: PrismaService,
  ) {}

  @Query(() => User)
  async me(@UserEntity() user: User): Promise<User> {
    return user;
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => User)
  async updateUser(
    @UserEntity() user: User,
    @Args('data') newUserData: UpdateUserInput,
  ) {
    return this.usersService.updateUser(user.id, newUserData);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => User)
  async changePassword(
    @UserEntity() user: User,
    @Args('data') changePassword: ChangePasswordInput,
  ) {
    return this.usersService.changePassword(
      user.id,
      user.password,
      changePassword,
    );
  }


  // @Mutation(() => ForgotPasswordResponse)
  // async forgotPassword(
  //   @Args('forgotPasswordData') forgotPasswordData: ForgotPasswordInput,
  // ): Promise<ForgotPasswordResponse> {
  //   // Verifique se o usuário existe
  //   const user = await this.prisma.user.findUnique({
  //     where: { email: forgotPasswordData.email },
  //   });

  //   if (!user) {
  //     throw new BadRequestException('E-mail não encontrado.');
  //   }

  //   // Gere um token único para redefinição de senha
  //   const resetToken = uuidv4();

  //   // Salve o token no banco de dados junto com um timestamp de validade
  //   await this.prisma.user.update({
  //     where: { email: forgotPasswordData.email },
  //     data: {
        
  //       resetPasswordToken: resetToken,
  //       resetPasswordExpires: new Date(new Date().getTime() + 3600000), // 1 hora de validade
  //     },
  //   });

  //   const resetPasswordUrl = `https://seufrontend.com/reset-password?token=${resetToken}`;

  //   // Envie o e-mail com o token de redefinição de senha
  //   await this.mailerService.sendMail({
  //     to: forgotPasswordData.email,
  //     subject: 'Redefinição de Senha',
  //     template: './reset-password', // O caminho para o template de e-mail
  //     context: { // Dados para o template
  //       resetPasswordUrl,
  //     },
  //   });

  //   // Envie o e-mail com o token de redefinição de senha
  //   // Aqui você deve integrar seu serviço de e-mail para enviar o token
  //   // Exemplo: await this.emailService.sendResetPasswordEmail(user.email, resetToken);

  //   return {
  //     success: true,
  //     message: 'Um e-mail com instruções de redefinição de senha foi enviado.',
  //   };
  // }




  // @Mutation(() => Boolean)
  // async resetPassword(
  //   @Args('token') token: string,
  //   @Args('newPassword') newPassword: string,
  // ): Promise<boolean> {
  //   // Chame o serviço de usuário para redefinir a senha
  //   await this.usersService.resetPassword(token, newPassword);

  //   return true;
  // }
  
}
