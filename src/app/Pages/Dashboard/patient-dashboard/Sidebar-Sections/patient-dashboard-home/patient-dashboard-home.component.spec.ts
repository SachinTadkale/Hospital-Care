import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDashboardHomeComponent } from './patient-dashboard-home.component';

describe('PatientDashboardHomeComponent', () => {
  let component: PatientDashboardHomeComponent;
  let fixture: ComponentFixture<PatientDashboardHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientDashboardHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatientDashboardHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
