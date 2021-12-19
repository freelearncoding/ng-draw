import {
  ChangeDetectorRef,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ToolType } from 'src/app/enums/ngdraw-enums';
import { NGDrawHelper } from 'src/app/services/draw-helper';

@Component({
  selector: 'ng-draw-container',
  templateUrl: './ng-draw-container.component.html',
  styleUrls: ['./ng-draw-container.component.scss'],
})
export class NgDrawContainerComponent implements OnInit, OnChanges {
  constructor(public ref: ChangeDetectorRef, public drawHelper: NGDrawHelper) {}

  ngOnInit(): void {}

  ngOnChanges(change: SimpleChanges): void {
    this.ref.detectChanges();
  }

  canSelectPoints(): boolean {
    return false;
  }

  deSelectComponents() {
    // for (var i = 0; i < shapes.length; i++) {
    //   shapes[i].isSelected = false;
    // }
  }

  selectTool(toolType: string): void {
    this.drawHelper.selectedTool = ToolType[toolType];
    console.log('selected tool:', toolType);
    if (this.drawHelper.selectedTool == ToolType.Pointer) {
      // if (this.isSelectingPoints) {
      //   // this.selectedComponent.endDrawing();
      //   this.isSelectingPoints = false;
      // }
    }
  }

  selectShape(shapeType: string): void {}

  clearShapes(): void {}
}
