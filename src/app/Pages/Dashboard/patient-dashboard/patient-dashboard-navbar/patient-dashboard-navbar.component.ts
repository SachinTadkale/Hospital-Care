import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-dashboard-navbar',
  standalone: true,
  imports: [],
  templateUrl: './patient-dashboard-navbar.component.html',
  styleUrl: './patient-dashboard-navbar.component.css'
})
export class PatientDashboardNavbarComponent {
  storedUser = localStorage.getItem('name');
  uname: any = this.storedUser;
  constructor(private router:Router){}
  logout() {
    if (localStorage.getItem('username')) {
      localStorage.removeItem('username');
    }
  }
  profile(){
    this.router.navigate(
      [{ outlets: { primary: ['profile'], outlet2: null } }]
    );
  }
}
