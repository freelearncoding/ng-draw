import { ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NGDrawLine } from 'src/app/models/line-model';
import { NGDrawPoint } from 'src/app/models/point-model';
import { NGDrawPolygon } from 'src/app/models/polygon-model';

@Component({
  selector: 'ng-draw-display',
  templateUrl: './ng-draw-display.component.html',
  styleUrls: ['./ng-draw-display.component.scss'],
})
export class NgDrawDisplayComponent implements OnInit, OnChanges {
  svg: any;
  currentPosition: NGDrawPoint = new NGDrawPoint();
  drawingPolygon: NGDrawPolygon = new NGDrawPolygon();
  drawingLine: NGDrawLine = new NGDrawLine();
  
  constructor(public ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.svg = document.querySelector('svg');
  }
  ngOnChanges(change: SimpleChanges): void {
    this.ref.detectChanges()
  }

  getMousePosition(event: MouseEvent) {
    var svgPosition = this.svg.getScreenCTM();
    this.currentPosition.x = (event.clientX - svgPosition.e) / svgPosition.a;
    this.currentPosition.y = (event.clientY - svgPosition.f) / svgPosition.d;
  }

  onMouseDown(event): void {
    this.getMousePosition(event);

    if (this.drawingLine != null) {
      if (this.drawingLine.originPoint.x == 0) {
        this.drawingLine.originPoint.x = this.currentPosition.x;
        this.drawingLine.originPoint.y = this.currentPosition.y;
      } else {
        this.drawingLine.point.x = this.currentPosition.x;
        this.drawingLine.point.y = this.currentPosition.y;

        this.drawingPolygon.lines.push(this.drawingLine.clone());

        this.drawingLine = new NGDrawLine();
      }
    }
  }
  onMouseMove(event): void {
    this.getMousePosition(event);
  }

  onMouseUp(event): void {
    this.getMousePosition(event);
  }
}
