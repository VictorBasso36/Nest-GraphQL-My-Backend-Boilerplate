import { Module } from '@nestjs/common';
import { CompanyResolver } from './company.resolver';


@Module({
  imports: [],
  providers: [CompanyResolver],
})
export class CompanyModule {}
