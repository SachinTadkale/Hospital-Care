import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,FormsModule],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    const nav = this.router.getCurrentNavigation();
    const state = nav?.extras?.state as {
      firstName: string;
      lastName: string;
      email: string;
    };

    this.registrationForm = this.fb.group({
      firstName: [state?.firstName || '', Validators.required],
      lastName: [state?.lastName || '', Validators.required],
      email: [state?.email || '', Validators.required],
      phone: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      bloodGroup: ['', Validators.required],
      cityState: ['', Validators.required],
      emergencyContact: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

 onSubmit() {
  if (this.registrationForm.invalid) {
    this.registrationForm.markAllAsTouched();

    Object.keys(this.registrationForm.controls).forEach(key => {
      const control = this.registrationForm.get(key);
      if (control && control.invalid) {
        console.warn(`Invalid field: ${key} | Value: ${control.value}`);
      }
    });

    alert('Please complete the full registration form.');
    return;
  }

  console.log('Full Registration Data:', this.registrationForm.value);
  this.router.navigate(['/login']);
}

  }

