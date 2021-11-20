import { NGDrawCircle } from "./circle-model";
import { NGDrawLine } from "./line-model";
import { NGDrawText } from "./text-model";


export interface NGDrawPolygon {

    id: number;

    texts: Array<NGDrawText>;
    circles: Array<NGDrawCircle>;
    lines: Array<NGDrawLine>;

    isActive: boolean;
    isSelected: boolean;
    isDragging: boolean;

    parent?: NGDrawPolygon;
}