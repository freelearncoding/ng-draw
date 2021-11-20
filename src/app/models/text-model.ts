import * as internal from "stream";
import { PointType } from "../enums/ngdraw-enums";
import { NGDrawPoint } from "./point-model";


export interface NGDrawText {

    id: number;

    content: string;
    height: number;
    width: number;
    rectLeft: number;
    rectTop: number;
}