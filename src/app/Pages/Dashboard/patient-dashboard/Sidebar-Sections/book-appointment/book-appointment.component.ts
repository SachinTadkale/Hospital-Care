import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-appointment',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent {
  step = 1;

  stepOneForm: FormGroup;
  stepTwoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.stepOneForm = this.fb.group({
      userId: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]],
      contactNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      date: ['', Validators.required],
      time: ['', Validators.required],
      message: ['']
    });

    this.stepTwoForm = this.fb.group({
      service: ['', Validators.required],
      doctor: ['', Validators.required],
      consultationMode: ['', Validators.required],
      paymentMode: ['', Validators.required]
    });
  }

  goToStepTwo() {
    if (this.stepOneForm.valid) {
      this.step = 2;
    } else {
      this.stepOneForm.markAllAsTouched(); // Show errors if any
    }
  }

  onSubmit() {
    if (this.stepTwoForm.valid) {
      const appointmentData = {
        ...this.stepOneForm.value,
        ...this.stepTwoForm.value
      };
      console.log('Submitted:', appointmentData);
      // Submit to backend here
    } else {
      this.stepTwoForm.markAllAsTouched();
    }
  }
}
