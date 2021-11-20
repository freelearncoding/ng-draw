import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDrawLineComponent } from './ng-draw-line.component';

describe('NgDrawLineComponent', () => {
  let component: NgDrawLineComponent;
  let fixture: ComponentFixture<NgDrawLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgDrawLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDrawLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
