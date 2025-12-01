import type { MRT_ColumnDef } from "material-react-table";
import type { IDriverTable } from "../../../entities/driver/model/driver-type";

export const driversColumns: MRT_ColumnDef<IDriverTable>[] = [
    {accessorKey: 'name', header: 'Имя водителя'},
    {accessorKey: 'phone', header: 'Номер телефона'},
    {accessorKey: 'status', header: 'Текущий статус'},
    {accessorKey: 'timeWork', header: 'Время в работе, ч'}
] 