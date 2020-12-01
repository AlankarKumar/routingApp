import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Routed2Component } from './routed2.component';

describe('Routed2Component', () => {
  let component: Routed2Component;
  let fixture: ComponentFixture<Routed2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Routed2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Routed2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
