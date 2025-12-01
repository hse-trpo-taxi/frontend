export type Coord = [number, number];

export type Point = {
    id: number | string;
    coords: Coord;
};

export interface IDriversCoord {
    id: number,
    name: string,
    x: number,
    y: number
}