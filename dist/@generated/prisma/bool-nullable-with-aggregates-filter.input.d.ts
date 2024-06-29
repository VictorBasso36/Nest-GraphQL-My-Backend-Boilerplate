import { NestedBoolNullableWithAggregatesFilter } from './nested-bool-nullable-with-aggregates-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedBoolNullableFilter } from './nested-bool-nullable-filter.input';
export declare class BoolNullableWithAggregatesFilter {
    equals?: boolean;
    not?: NestedBoolNullableWithAggregatesFilter;
    _count?: NestedIntNullableFilter;
    _min?: NestedBoolNullableFilter;
    _max?: NestedBoolNullableFilter;
}
