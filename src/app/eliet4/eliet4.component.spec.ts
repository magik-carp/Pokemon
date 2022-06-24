import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eliet4Component } from './eliet4.component';

describe('Eliet4Component', () => {
  let component: Eliet4Component;
  let fixture: ComponentFixture<Eliet4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Eliet4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Eliet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
