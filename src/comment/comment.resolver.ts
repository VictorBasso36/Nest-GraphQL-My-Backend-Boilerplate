import { PrismaService } from 'nestjs-prisma';
import {
  Resolver,
  Query,
  Args,
  Mutation,
} from '@nestjs/graphql'
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';
import { ConflictException, UseGuards } from '@nestjs/common';
import { CommentCreateInput } from 'src/@generated/comment/comment-create.input';
import { UpdateOneCommentArgs } from 'src/@generated/comment/update-one-comment.args';
import { FindManyCommentArgs } from 'src/@generated/comment/find-many-comment.args';
import { Comment } from '../@generated/comment/comment.model';
import { CommentPaginatedModel } from './models/find-many-comment.model';
import * as nodemailer from 'nodemailer';

@Resolver(() => Comment)
export class CommentResolver {
  constructor(
    private prisma: PrismaService,
  ) {}

  @Query(() => CommentPaginatedModel, {nullable: true})
  async comments(@Args() args: FindManyCommentArgs) {
    const take = args?.take || 10;
    const skip = args?.skip || 0;
  
    const totalItems = await this.prisma.comment.count({
      where: args?.where
    });
  

    const totalPages = Math.ceil(totalItems / take);
  

    const data = await this.prisma.comment.findMany({
      where: args?.where,
      take,
      skip,
      orderBy: args?.orderBy,
      cursor: args?.cursor,
      include: {
        Company: true,
        CommentResponse: true,
        User: {
          include: {
            Company: true
          },
        }
      }
    });

    const hasNextPage = (skip + take) < totalItems;
    const hasPreviousPage = skip > 0;

    return {
      pageInfo: {
        take,
        hasNextPage,
        hasPreviousPage,
        totalPages,
        totalItems,
        skip,
      },
      nodes: data,
    };
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Comment, {name: 'createComment'})
  async createComment(@Args('data') data: CommentCreateInput) {

    if(!data?.serviceType) throw new ConflictException(`você não enviou o tipo de serviço.`);
    if(!data?.content) throw new ConflictException(`você não a descrição do serviço prestado.`);
    if(!data?.title) throw new ConflictException(`você não enviou o título da avaliação.`);
    
    const company = await this.prisma.company.findUniqueOrThrow({
      where: {
        id: data?.Company?.connect?.id
      }
    })

    let newRating = data?.rating; 

    let newAverageRating = ((company?.rating * company?.ratingCount) + newRating) / (company?.ratingCount + 1);

    await this.prisma.company.update({
      where: {
        id: data?.Company?.connect?.id
      },
      data: {
        ratingCount: company?.ratingCount + 1,
        rating: newAverageRating 
        
      }
    })

    const comment = await this.prisma.comment.create({
      data: {
        ...data,
        approved: false
      },
    });

    const commentandcompany = await this.prisma.comment.findUnique({
      where: {
        id: comment?.id
      },
      include: {
        CommentResponse: true,
        User: true,
        Company: true
      }
    })

    const companyId = commentandcompany?.companyId
    const commentId = comment?.id
    const ownerCommentUser = commentandcompany?.User?.email

    const resetPasswordUrl = `${process.env.APPDOMAIN}/empresa/${companyId}?commentid=${commentId}`;

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASS,
      },
    });
  
    const mailOptions = {
      from: process.env.SMTP_EMAIL,
      to: ownerCommentUser,
      subject: `${process.env.APPNAME} - Recebemos seu comentário, obrigado!.`,
      html: `
        <p>A Equipe Reclame Solar notificará a empresa sobre sua avaliação: "${commentandcompany?.title}"</p>
        <p>Conte conosco!</p>
        <a href="${resetPasswordUrl}">Clique aqui</a>
        <p>ou Acesse: ${resetPasswordUrl} para acompanhar seu caso.</p>
      `,
    };


    await transporter.sendMail(mailOptions);

    

    return comment
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Comment, {name: 'updateComment'})
  async updateComment(@Args() data: UpdateOneCommentArgs) {


    if(data?.data?.CommentResponse){

      const commentandcompany = await this.prisma.comment.findUnique({
        where: {
          id: data?.where?.id
        },
        include: {
          CommentResponse: true,
          User: true,
          Company: true
        }
      })


      const companyId = commentandcompany?.companyId
      const commentId = data?.where?.id
      const ownerCommentUser = commentandcompany?.User?.email

      const resetPasswordUrl = `${process.env.APPDOMAIN}/empresa/${companyId}?commentid=${commentId}`;
  
      const transporter = nodemailer.createTransport({
        service: "Gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.SMTP_EMAIL,
          pass: process.env.SMTP_PASS,
        },
      });
    
      const mailOptions = {
        from: process.env.SMTP_EMAIL,
        to: ownerCommentUser,
        subject: `${process.env.APPNAME} - Atualização sobre sua avaliação.`,
        html: `
          <p>Temos atualizações sobre a avaliação: "${commentandcompany?.title}"</p>
          <a href="${resetPasswordUrl}">Clique aqui</a>
          <p>ou Acesse: ${resetPasswordUrl} para avançar seu caso.</p>
        `,
      };


      await transporter.sendMail(mailOptions);
    }

    return await this.prisma.comment.update({
      data: data?.data,
      where: data?.where
    });
  }
  
}
