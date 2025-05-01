import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PatientDashboardNavbarComponent } from './patient-dashboard-navbar/patient-dashboard-navbar.component';
import { PatientDashboardSidebarComponent } from './patient-dashboard-sidebar/patient-dashboard-sidebar.component';

@Component({
  selector: 'app-patient-dashboard',
  standalone: true,
  imports: [RouterOutlet,
    PatientDashboardNavbarComponent,
    PatientDashboardSidebarComponent,
  ],
  templateUrl: './patient-dashboard.component.html',
  styleUrl: './patient-dashboard.component.css'
})
export class PatientDashboardComponent {

}
