import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Routed1Component } from './routed1.component';

describe('Routed1Component', () => {
  let component: Routed1Component;
  let fixture: ComponentFixture<Routed1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Routed1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Routed1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
