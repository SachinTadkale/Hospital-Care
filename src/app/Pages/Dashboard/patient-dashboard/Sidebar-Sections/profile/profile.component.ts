import { Component, OnInit } from '@angular/core';
import { userData } from '../../../../../model/user-data';
import { PatientService } from '../../../../../Services/Patient/patient.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{

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
