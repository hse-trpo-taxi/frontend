import type { DbDriverStatus } from "../../../widgets/drivers-table/model/drivers-statuses";

export interface IDriverTable {
    id: string | number;
    name: string;
    status: DbDriverStatus;
    phone: number;
    time_work: number;
}

export interface IDriverQuery {
    id: number,
    name: string,
    phone: string,
    license_number: string,
    rating: number,
    created_at: string,
    updated_at: string,
    status: string,
    time_work: number,
    x: number,
    y: number,
    scoreDriver: number,
    passport: number,
    snils: number,
    inn: number
}

export interface IDriverSingle {
    car: {
        number: number,
        model: string,
        mileage: number,
        scoreSystem: number,
        scoreUsers: number
    },
    driver: {
        name: string,
        phone: string,
        status: DbDriverStatus,
        scoreDriver: number,
        passport: number,
        snils: number,
        inn: number
    }
}

export interface IDriverMap {
    Info: {
        time: number,
        passengers: number,
        timeClose: number
    },
    x: number,
    y: number
}

export interface ITimeTable {
    date: Date;
}