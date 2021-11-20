import { PointType } from "../enums/ngdraw-enums";

export interface NGDrawPoint {
    id: number;

    x: number;
    y: number;
    pointType: PointType;
}