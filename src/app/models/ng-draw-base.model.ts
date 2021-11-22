import { DrawProperties } from "./darw-properties-model";
import { NGDrawPoint } from "./point-model";

export interface BaseDraw {
   
}

export class DrawShape implements BaseDraw {
    
    domid: string;
    drawProperties: DrawProperties;
    originPoint: NGDrawPoint;

    constructor(domid: string) {
        this.domid = domid;
        this.drawProperties = new DrawProperties();
        this.originPoint = new NGDrawPoint();
        this.originPoint.x = this.originPoint.y = 0;
    }
}
