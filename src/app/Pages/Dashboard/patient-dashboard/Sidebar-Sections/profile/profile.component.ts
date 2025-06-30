import { Component, OnInit } from '@angular/core';
import { userData } from '../../../../../model/user-data';
import { PatientService } from '../../../../../Services/Patient/patient.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']  // ✅ Correct plural
})
export class ProfileComponent implements OnInit {
  user: userData | null = null;
  error: string = '';
  isEditing = false;

  constructor(private userService: PatientService) {}

  ngOnInit(): void {
    this.fetchUser();
  }

  fetchUser(): void {
    this.userService.getUserById().subscribe({
      next: (data: userData) => {
        this.user = data;
        localStorage.setItem('firstName', data.firstName);
      },
      error: (err: any) => {
        this.error = err.error?.error || 'Failed to fetch user';
      }
    });
  }

  enableEdit(): void {
    this.isEditing = true;
  }

  save(): void {
    if (this.user) {
      this.userService.updateUser(this.user).subscribe({
        next: () => {
          this.isEditing = false;
          alert('Profile updated!');
        },
        error: (err: any) => {
          alert('Failed to save profile');
          console.error(err);
        }
      });
    }
  }
}
