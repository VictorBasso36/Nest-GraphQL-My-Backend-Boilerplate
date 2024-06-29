import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { BoolNullableWithAggregatesFilter } from '../prisma/bool-nullable-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { FloatNullableWithAggregatesFilter } from '../prisma/float-nullable-with-aggregates-filter.input';
export declare class CompanyScalarWhereWithAggregatesInput {
    AND?: Array<CompanyScalarWhereWithAggregatesInput>;
    OR?: Array<CompanyScalarWhereWithAggregatesInput>;
    NOT?: Array<CompanyScalarWhereWithAggregatesInput>;
    id?: StringWithAggregatesFilter;
    createdAt?: DateTimeWithAggregatesFilter;
    updatedAt?: DateTimeWithAggregatesFilter;
    cnpj?: StringWithAggregatesFilter;
    location?: StringWithAggregatesFilter;
    description?: StringNullableWithAggregatesFilter;
    urlImage?: StringNullableWithAggregatesFilter;
    working?: StringNullableWithAggregatesFilter;
    approved?: BoolNullableWithAggregatesFilter;
    name?: StringWithAggregatesFilter;
    ratingCount?: IntNullableWithAggregatesFilter;
    rating?: FloatNullableWithAggregatesFilter;
}
