import { DrawShape } from "./ng-draw-base.model";
import { NGDrawPoint } from "./point-model";

export class NGDrawLine extends DrawShape {

    private static internalid: number = 0;
    id: number;

    point: NGDrawPoint;

    isSelected: boolean;
    isActive: boolean;
    isLocked: boolean;

    constructor() {
        super('line-' + NGDrawLine.internalid++)
        this.point = new NGDrawPoint();
    }

    clone() {
        var line = new NGDrawLine();
        line.originPoint.x = this.originPoint.x;
        line.originPoint.y = this.originPoint.y;
        line.point.x = this.point.x;
        line.point.y = this.point.y;
        line.drawProperties = this.drawProperties;

        return line;
    }
}