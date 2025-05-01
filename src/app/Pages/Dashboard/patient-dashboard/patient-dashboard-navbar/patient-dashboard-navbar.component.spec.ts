import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDashboardNavbarComponent } from './patient-dashboard-navbar.component';

describe('PatientDashboardNavbarComponent', () => {
  let component: PatientDashboardNavbarComponent;
  let fixture: ComponentFixture<PatientDashboardNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientDashboardNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatientDashboardNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
