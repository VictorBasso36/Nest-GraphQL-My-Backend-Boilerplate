import { Company } from "src/@generated/company/company.model";
import { PageInfo } from "src/common/pagination/page-info.model";
export declare class CompanyPaginatedModel {
    pageInfo: PageInfo;
    nodes: [Company];
}
