import type { MRT_ColumnDef } from "material-react-table";
import type { IDriverTable } from "../../../entities/driver/model/driver-type";
import { DB_TO_UI_STATUS } from "./drivers-statuses";

export const driversColumns: MRT_ColumnDef<IDriverTable>[] = [
    { accessorKey: 'name', header: 'Имя водителя' },
    { accessorKey: 'phone', header: 'Номер телефона' },
    { accessorKey: 'status', header: 'Текущий статус', accessorFn: (row) => DB_TO_UI_STATUS[row.status] },
    { accessorKey: 'time_work', header: 'Время в работе, ч' }
] 