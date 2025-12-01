export interface IDriverTable {
    id: string | number;
    name: string;
    status: string;
    phone: number;
    timeWork: number;
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