import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Shop2DetailComponent } from './shop2-detail.component';

describe('Shop2DetailComponent', () => {
  let component: Shop2DetailComponent;
  let fixture: ComponentFixture<Shop2DetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Shop2DetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Shop2DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
