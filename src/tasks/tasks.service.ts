import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);
  
  constructor(
    private prisma: PrismaService,
  ) {}

  @Cron('0 0 */6 * * *')
  async handleCron() {
    this.logger.debug('Called every 6 hours');

    const companies = await this.prisma.company.findMany({
      select: {
        id: true
      },
      where: {
        approved: true
      }
    });
    
    if(companies.length < 0) {
        this.logger.debug('no companies');
    }
    
    for (const company of companies) {

      this.logger.debug(`Company ID: ${company.id}`);

      // Pegue todos os comentários aprovados da empresa
      const comments = await this.prisma.comment.findMany({
        select: {
          rating: true
        },
        where: {
          companyId: company.id,
          approved: true
        }
      });

      if (comments.length > 0) {
        // Calcular a média de avaliação
        const totalRating = comments.reduce((sum, comment) => sum + comment.rating, 0);
        const averageRating = totalRating / comments.length;

        // Atualizar a empresa com a nova média de avaliação
        await this.prisma.company.update({
          data: {
            rating: averageRating
          },
          where: {
            id: company.id
          }
        });

        this.logger.debug(`New average rating for company ${company.id}: ${averageRating}`);
      } else {
        this.logger.debug(`No approved comments for company ${company.id}`);
      }
    }
  }
}
