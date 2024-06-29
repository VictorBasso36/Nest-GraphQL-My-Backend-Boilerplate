import { NestedFloatNullableFilter } from './nested-float-nullable-filter.input';
export declare class FloatNullableFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: NestedFloatNullableFilter;
}
