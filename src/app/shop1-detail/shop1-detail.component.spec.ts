import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Shop1DetailComponent } from './shop1-detail.component';

describe('Shop1DetailComponent', () => {
  let component: Shop1DetailComponent;
  let fixture: ComponentFixture<Shop1DetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Shop1DetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Shop1DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
