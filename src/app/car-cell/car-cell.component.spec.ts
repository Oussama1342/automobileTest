import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarCellComponent } from './car-cell.component';

describe('CarCellComponent', () => {
  let component: CarCellComponent;
  let fixture: ComponentFixture<CarCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
