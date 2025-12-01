export interface IStatisticOrder {
    mon: number,
    tue: number,
    wed: number,
    thu: number,
    fri: number,
    sat: number,
    sun: number
}

export interface IStatisticDriver {
    order: number,
    free: number,
    technical: number
}

export interface IStatisticDriverScore {
    score: number,
    timeWaiting: number,
    timeFree: number
}