import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userData } from '../../../../model/user-data';
import { PatientService } from '../../../../Services/Patient/patient.service';

@Component({
  selector: 'app-patient-dashboard-navbar',
  standalone: true,
  imports: [],
  templateUrl: './patient-dashboard-navbar.component.html',
  styleUrl: './patient-dashboard-navbar.component.css'
})
export class PatientDashboardNavbarComponent {

  
constructor(private router: Router){}

    logout(){

      localStorage.removeItem('token');
      localStorage.removeItem('firstName');
      this.router.navigate(['/landing']);
    }
  
  
}
