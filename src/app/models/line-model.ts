import * as internal from "stream";
import { PointType } from "../enums/ngdraw-enums";
import { NGDrawPoint } from "./point-model";


export interface NGDrawLine {

    id: number;

    pointX: NGDrawPoint;
    pointY: NGDrawPoint;

    type: PointType;

    isSelected: boolean;
    isActive: boolean;
    isLocked: boolean;
}