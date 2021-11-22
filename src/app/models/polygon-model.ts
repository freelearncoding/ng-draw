import { NGDrawCircle } from "./circle-model";
import { NGDrawLine } from "./line-model";
import { DrawShape } from "./ng-draw-base.model";
import { NGDrawText } from "./text-model";

export class NGDrawPolygon extends DrawShape {
    
    private static internalid: number = 0;
    id: number;

    texts: Array<NGDrawText>;
    circles: Array<NGDrawCircle>;
    lines: Array<NGDrawLine>;

    isActive: boolean;
    isSelected: boolean;
    isDragging: boolean;

    parent?: NGDrawPolygon;

    constructor() {
        super('line-' + NGDrawPolygon.internalid++)
        this.texts = new Array<NGDrawText>();
        this.circles = new Array<NGDrawCircle>();
        this.lines = new Array<NGDrawLine>();
    }
}