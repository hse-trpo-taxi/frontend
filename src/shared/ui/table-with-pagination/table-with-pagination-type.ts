import { type MRT_ColumnDef, type MRT_TableOptions } from 'material-react-table';
import type { Dispatch, SetStateAction } from 'react';

export type TableWithPaginationType<T extends Record<string, any>> = {
    name: string;
    data: T[];
    columns: MRT_ColumnDef<T, unknown>[] & MRT_ColumnDef<T, any>[];
    isLoading?: boolean;
    enableRowSelection?: boolean;
    onRowClick?: (row: T) => void;
    onRefresh?: () => void;
    page: number;
    pageSize: number;
    setPage: Dispatch<SetStateAction<number>>;
    setPageSize: Dispatch<SetStateAction<number>>;
    rowCount: number;
    totalPage: number;
} & Partial<MRT_TableOptions<T>>;