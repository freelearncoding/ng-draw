import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDrawContainerComponent } from './ng-draw-container.component';

describe('NgDrawContainerComponent', () => {
  let component: NgDrawContainerComponent;
  let fixture: ComponentFixture<NgDrawContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgDrawContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDrawContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
