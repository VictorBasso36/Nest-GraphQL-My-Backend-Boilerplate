import { CompanyCountAggregate } from './company-count-aggregate.output';
import { CompanyAvgAggregate } from './company-avg-aggregate.output';
import { CompanySumAggregate } from './company-sum-aggregate.output';
import { CompanyMinAggregate } from './company-min-aggregate.output';
import { CompanyMaxAggregate } from './company-max-aggregate.output';
export declare class AggregateCompany {
    _count?: CompanyCountAggregate;
    _avg?: CompanyAvgAggregate;
    _sum?: CompanySumAggregate;
    _min?: CompanyMinAggregate;
    _max?: CompanyMaxAggregate;
}
