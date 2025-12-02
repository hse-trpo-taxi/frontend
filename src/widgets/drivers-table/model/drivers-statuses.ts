export const DRIVER_STATUSES = ['Все', 'На заказе', 'Свободные', 'Технический перерыв', 'Выходной']

export type DriverStatus = (typeof DRIVER_STATUSES)[number]

export type DbDriverStatus = 'active' | 'onOrder' | 'atRequest' | 'offline';

export const UI_TO_DB_STATUS: Partial<Record<DriverStatus, DbDriverStatus>> = {
    'На заказе': 'onOrder',
    'Свободные': 'active',
    'Технический перерыв': 'atRequest',
    'Выходной': 'offline',
    'Все': undefined,
};

export const DB_TO_UI_STATUS: Record<DbDriverStatus, DriverStatus> = {
    active: 'Свободный',
    onOrder: 'На заказе',
    atRequest: 'Технический перерыв',
    offline: 'Выходной',
};
