import { SortOrder } from "../enum/sort-order.enum";

export interface SpecificationFilter {
    isPaginate: boolean,
    pageNumber: number,
    top: number,
    orderBy: {
        fieldName: string;
        sort: SortOrder;
    } | null;
    search: string | null,
    startDate: Date | null,
    endDate: Date | null

}
