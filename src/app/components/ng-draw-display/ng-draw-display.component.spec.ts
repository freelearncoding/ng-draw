import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDrawDisplayComponent } from './ng-draw-display.component';

describe('NgDrawDisplayComponent', () => {
  let component: NgDrawDisplayComponent;
  let fixture: ComponentFixture<NgDrawDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgDrawDisplayComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDrawDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
