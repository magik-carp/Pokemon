import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialEncountersComponent } from './special-encounters.component';

describe('SpecialEncountersComponent', () => {
  let component: SpecialEncountersComponent;
  let fixture: ComponentFixture<SpecialEncountersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialEncountersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialEncountersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
