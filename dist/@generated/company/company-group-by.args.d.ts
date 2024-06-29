import { CompanyWhereInput } from './company-where.input';
import { CompanyOrderByWithAggregationInput } from './company-order-by-with-aggregation.input';
import { CompanyScalarFieldEnum } from './company-scalar-field.enum';
import { CompanyScalarWhereWithAggregatesInput } from './company-scalar-where-with-aggregates.input';
import { CompanyCountAggregateInput } from './company-count-aggregate.input';
import { CompanyAvgAggregateInput } from './company-avg-aggregate.input';
import { CompanySumAggregateInput } from './company-sum-aggregate.input';
import { CompanyMinAggregateInput } from './company-min-aggregate.input';
import { CompanyMaxAggregateInput } from './company-max-aggregate.input';
export declare class CompanyGroupByArgs {
    where?: CompanyWhereInput;
    orderBy?: Array<CompanyOrderByWithAggregationInput>;
    by: Array<keyof typeof CompanyScalarFieldEnum>;
    having?: CompanyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CompanyCountAggregateInput;
    _avg?: CompanyAvgAggregateInput;
    _sum?: CompanySumAggregateInput;
    _min?: CompanyMinAggregateInput;
    _max?: CompanyMaxAggregateInput;
}
