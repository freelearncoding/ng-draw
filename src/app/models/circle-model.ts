import * as internal from "stream";
import { PointType } from "../enums/ngdraw-enums";
import { NGDrawPoint } from "./point-model";
import { NGDrawStroke } from "./stroke-model";


export interface NGDrawCircle {

    id: number;

    x: number;
    y: number;
    radius: number;
    stroke: NGDrawStroke;
}