import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { NGDrawLine } from 'src/app/models/line-model';

@Component({
  selector: '[ng-draw-line]',
  templateUrl: './ng-draw-line.component.html',
  styleUrls: ['./ng-draw-line.component.scss'],
})
export class NgDrawLineComponent implements OnInit, OnChanges {
  @Input()
  shape: NGDrawLine;

  constructor(public ref: ChangeDetectorRef) {}

  ngOnInit(): void {}
  ngOnChanges(change: SimpleChanges): void {
    this.ref.detectChanges();
  }
  setStyles() {
    let styles = {
      stroke: this.shape.drawProperties.strokeFill,
      'stroke-width': this.shape.drawProperties.strokeWidth,
    };
    return styles;
  }
}
