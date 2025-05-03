import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
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
      localStorage.setItem('patientData', JSON.stringify(this.patient));
      alert('Registration successful!');
      console.log('Stored Data:', this.patient);
      form.reset();
      this.step = 1;
    } else {
      alert('Please complete the form correctly.');
    }
  }
}
