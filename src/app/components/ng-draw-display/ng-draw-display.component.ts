import {
  ChangeDetectorRef,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { NGDrawLine } from 'src/app/models/line-model';
import { NGDrawPolygon } from 'src/app/models/polygon-model';
import { NGDrawHelper } from 'src/app/services/draw-helper';

@Component({
  selector: '[ng-draw-display]',
  templateUrl: './ng-draw-display.component.html',
  styleUrls: ['./ng-draw-display.component.scss'],
})
export class NgDrawDisplayComponent implements OnInit, OnChanges {
  
  drawingPolygon: NGDrawPolygon = new NGDrawPolygon();
  drawingLine: NGDrawLine = new NGDrawLine();

  constructor(public ref: ChangeDetectorRef, public drawHelper: NGDrawHelper) {}

  ngOnInit(): void {
    this.drawHelper.svg = document.querySelector('svg');
  }

  ngOnChanges(change: SimpleChanges): void {
    this.ref.detectChanges();
  }


  onMouseDown(event): void {
    this.drawHelper.getMousePosition(event);

    if (this.drawingLine != null) {
      if (this.drawingLine.originPoint.x == 0) {
        this.drawingLine.originPoint.x = this.drawHelper.currentPosition.x;
        this.drawingLine.originPoint.y = this.drawHelper.currentPosition.y;
      } else {
        this.drawingLine.point.x = this.drawHelper.currentPosition.x;
        this.drawingLine.point.y = this.drawHelper.currentPosition.y;

        this.drawingPolygon.lines.push(this.drawingLine.clone());
        this.drawingPolygon.lines = [].concat(this.drawingPolygon.lines);
        this.drawingLine = new NGDrawLine();
      }
    }
  }
  onMouseMove(event): void {
    this.drawHelper.getMousePosition(event);
  }

  onMouseUp(event): void {
    this.drawHelper.getMousePosition(event);
  }
}
