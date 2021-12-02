import {
  ChangeDetectorRef,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'ng-draw-container',
  templateUrl: './ng-draw-container.component.html',
  styleUrls: ['./ng-draw-container.component.scss'],
})
export class NgDrawContainerComponent implements OnInit, OnChanges {
  constructor(public ref: ChangeDetectorRef) {}

  ngOnInit(): void {}
  ngOnChanges(change: SimpleChanges): void {
    this.ref.detectChanges();
  }
}
