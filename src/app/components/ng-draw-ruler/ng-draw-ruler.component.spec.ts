import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDrawRulerComponent } from './ng-draw-ruler.component';

describe('NgDrawRulerComponent', () => {
  let component: NgDrawRulerComponent;
  let fixture: ComponentFixture<NgDrawRulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgDrawRulerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDrawRulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
