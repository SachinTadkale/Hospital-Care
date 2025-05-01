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
    switch (item) {
      case 'Dashboard':
        this.router.navigate(['patient-dashboard/']);
        this.activeItem = item; // Set the clicked item as active
        break;
      case `Doctors Availability`:
        this.router.navigate(['patient-dashboard/doctors-availability']);
        this.activeItem = item; // Set the clicked item as active
        break;
      case 'Book Appointment':
        this.router.navigate(['patient-dashboard/book-appointment']);
        this.activeItem = item; // Set the clicked item as active
        break;
      case 'Patient Reports':
        this.router.navigate(['patient-dashboard/patient-reports']);
        this.activeItem = item; // Set the clicked item as active
        break;
      default:
        console.log('Unknown menu item clicked.');
    }
  }
}
