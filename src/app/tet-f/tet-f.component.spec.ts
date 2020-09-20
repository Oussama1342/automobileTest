import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TetFComponent } from './tet-f.component';

describe('TetFComponent', () => {
  let component: TetFComponent;
  let fixture: ComponentFixture<TetFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TetFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TetFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
