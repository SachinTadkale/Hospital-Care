import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-dashboard-sidebar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './patient-dashboard-sidebar.component.html',
  styleUrl: './patient-dashboard-sidebar.component.css'
})
export class PatientDashboardSidebarComponent {
  activeItem: string = 'Dashboard'; // Stores the active menu item

  constructor(private router: Router) {}

  onItemClick(item: string): void {
    this.activeItem = item;

    switch (item) {
      case 'Dashboard':
        this.router.navigate(['patient-dashboard']);
        break;
      case 'Profile':
        this.router.navigate(['patient-dashboard/profile']);
        break;
      case 'Medical History':
        this.router.navigate(['patient-dashboard/medical-history']);
        break;
      case 'Prescriptions':
        this.router.navigate(['patient-dashboard/prescriptions']);
        break;
      case 'Patient Reports':
        this.router.navigate(['patient-dashboard/patient-reports']);
        break;
      case 'Billing':
        this.router.navigate(['patient-dashboard/billing']);
        break;
      default:
        console.warn('Unknown menu item clicked:', item);
        break;
    }
  }
}
