import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../../../Services/Authentication/authentication-service.service';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  step: number = 1;

  patient = {
    full_name: '',
    email: '',
    phone: '',
    dob: '',
    password: '',
    confirmPassword: '',
    gender: '',
    blood_group: '',
    city_state: '',
    emergency_contact: '',
    address: ''
  };

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  nextStep() {
    if (this.step === 1) {
      if (
        this.patient.full_name &&
        this.patient.email &&
        this.patient.phone &&
        this.patient.dob &&
        this.patient.password &&
        this.patient.confirmPassword
      ) {
        if (this.patient.password !== this.patient.confirmPassword) {
          alert('Passwords do not match!');
          return;
        }
        this.step = 2;
      } else {
        alert('Please fill all required fields in Step 1.');
      }
    }
  }

  previousStep() {
    this.step = 1;
  }

  onSubmit(form: any) {
    if (form.valid) {
      const message = this.authService.signup(this.patient);  // ✅ Uses service now
      alert(message);

      if (message === 'Signup successful') {
        form.reset();
        this.step = 1;
        this.router.navigate(['/login']);
      }
    } else {
      alert('Please complete the form correctly.');
    }
  }
}
