import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-dashboard-home',
  standalone: true,
  imports: [],
  templateUrl: './patient-dashboard-home.component.html',
  styleUrl: './patient-dashboard-home.component.css'
})
export class PatientDashboardHomeComponent implements OnInit{

firstName: string | null = null;

  ngOnInit(): void {
      this.firstName = localStorage.getItem('firstName');
  }
  

}
