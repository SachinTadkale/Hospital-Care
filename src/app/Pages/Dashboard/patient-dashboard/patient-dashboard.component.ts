import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PatientDashboardNavbarComponent } from './patient-dashboard-navbar/patient-dashboard-navbar.component';
import { PatientDashboardSidebarComponent } from './patient-dashboard-sidebar/patient-dashboard-sidebar.component';
import { userData } from '../../../model/user-data';
import { PatientService } from '../../../Services/Patient/patient.service';

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
export class PatientDashboardComponent implements OnInit{

   user: userData| null = null;
  error: string = '';

  constructor(private userService: PatientService) {}

  ngOnInit(): void {
    this.fetchUser();
  }

   fetchUser(): void {
    this.userService.getUserById().subscribe({
      next: (data) => {
        this.user = data;
        localStorage.setItem('firstName',data.firstName);
      },
      error: (err) => {
        this.error = err.error?.error || 'Failed to fetch user';
      }
    });
  }

  
}
