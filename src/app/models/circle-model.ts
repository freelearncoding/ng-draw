import { DrawShape } from "./ng-draw-base.model";

export class NGDrawCircle extends DrawShape {

    private static internalid: number = 0;
    id: number;

    radius: number;

    constructor() {
        super('circle-' + NGDrawCircle.internalid++)
        this.radius = 0;
    }
}