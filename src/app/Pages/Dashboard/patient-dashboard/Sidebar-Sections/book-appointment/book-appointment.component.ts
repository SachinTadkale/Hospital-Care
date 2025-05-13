import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-appointment',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './book-appointment.component.html',
  styleUrl: './book-appointment.component.css',
})
export class BookAppointmentComponent implements OnInit {
  appointmentForm !: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // ✅ Initialize the form properly
    this.appointmentForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      date: ['', Validators.required],
      time: ['', Validators.required],
      message: ['']
    });

    console.log('BookAppointmentComponent loaded'); // debug check
  }

  onSubmit(): void {
    if (this.appointmentForm.valid) {
      console.log('Appointment submitted:', this.appointmentForm.value);
      alert('Appointment booked successfully!');
      this.appointmentForm.reset();
    } else {
      alert('Please fill all required fields');
    }
  }
}
