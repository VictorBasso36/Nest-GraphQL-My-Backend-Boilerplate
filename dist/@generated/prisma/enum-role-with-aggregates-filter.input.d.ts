import { Role } from './role.enum';
import { NestedEnumRoleWithAggregatesFilter } from './nested-enum-role-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumRoleFilter } from './nested-enum-role-filter.input';
export declare class EnumRoleWithAggregatesFilter {
    equals?: keyof typeof Role;
    in?: Array<keyof typeof Role>;
    notIn?: Array<keyof typeof Role>;
    not?: NestedEnumRoleWithAggregatesFilter;
    _count?: NestedIntFilter;
    _min?: NestedEnumRoleFilter;
    _max?: NestedEnumRoleFilter;
}
