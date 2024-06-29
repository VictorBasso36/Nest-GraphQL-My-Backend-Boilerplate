import { Role } from './role.enum';
import { NestedEnumRoleFilter } from './nested-enum-role-filter.input';
export declare class EnumRoleFilter {
    equals?: keyof typeof Role;
    in?: Array<keyof typeof Role>;
    notIn?: Array<keyof typeof Role>;
    not?: NestedEnumRoleFilter;
}
