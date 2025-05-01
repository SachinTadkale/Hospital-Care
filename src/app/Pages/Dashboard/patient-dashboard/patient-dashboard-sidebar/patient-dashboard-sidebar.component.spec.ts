import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDashboardSidebarComponent } from './patient-dashboard-sidebar.component';

describe('PatientDashboardSidebarComponent', () => {
  let component: PatientDashboardSidebarComponent;
  let fixture: ComponentFixture<PatientDashboardSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientDashboardSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatientDashboardSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
