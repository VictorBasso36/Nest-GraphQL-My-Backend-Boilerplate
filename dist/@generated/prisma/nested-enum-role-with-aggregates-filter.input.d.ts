import { Role } from './role.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumRoleFilter } from './nested-enum-role-filter.input';
export declare class NestedEnumRoleWithAggregatesFilter {
    equals?: keyof typeof Role;
    in?: Array<keyof typeof Role>;
    notIn?: Array<keyof typeof Role>;
    not?: NestedEnumRoleWithAggregatesFilter;
    _count?: NestedIntFilter;
    _min?: NestedEnumRoleFilter;
    _max?: NestedEnumRoleFilter;
}
