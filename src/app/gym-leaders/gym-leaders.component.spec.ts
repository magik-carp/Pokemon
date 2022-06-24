import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymLeadersComponent } from './gym-leaders.component';

describe('GymLeadersComponent', () => {
  let component: GymLeadersComponent;
  let fixture: ComponentFixture<GymLeadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GymLeadersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GymLeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
