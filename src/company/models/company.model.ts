
import {
  ObjectType,
} from '@nestjs/graphql';
import { Company } from 'src/@generated/company/company.model';

@ObjectType()
export class CompanyModel extends Company {}