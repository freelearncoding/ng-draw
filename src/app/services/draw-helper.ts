import { Injectable } from '@angular/core';
import { ToolType } from '../enums/ngdraw-enums';
import { NGDrawPoint } from '../models/point-model';

@Injectable({
  providedIn: 'root'
})
export class NGDrawHelper {
    svg: any;
    currentPosition: NGDrawPoint = new NGDrawPoint();
    selectedTool: ToolType;
    isDragging: boolean = false;
    isDrawing: boolean = false;
    isResizing: boolean = false;
    isSelectingPoints: boolean = false;

    height: number = 1000;
    width: number = 1000;
    svgCursor: string = 'svgCursor';

    constructor() {
    }


    getMousePosition(event: MouseEvent) {
        var svgPosition = this.svg.getScreenCTM();
        this.currentPosition.x =
          (event.clientX - svgPosition.e) / svgPosition.a;
        this.currentPosition.y =
          (event.clientY - svgPosition.f) / svgPosition.d;
    }
}
