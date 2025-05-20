import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { patientAppointment } from '../../../../../model/bookappointment';
import { PatientService } from '../../../../../Services/Patient/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-appointment',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,FormsModule],
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent {

  patientAppont: patientAppointment = {
    patientName: '',
    contactNumber: '',
    age: 0,
    gender: '',
    disease: '',
    selectedDate: '',
    selectedTime: '',
    message: ''
  }

 constructor(private patientService:PatientService, private router: Router){}

 onSubmit(){

if(

  this.patientAppont.patientName && 
  this.patientAppont.contactNumber && 
  this.patientAppont.selectedDate

){

   this.patientService.bookAppointment(this.patientAppont).subscribe({
      next: (response) => {
        alert(response.message);
        this.router.navigate(['/patient-dashboard']);


      },
      error: (error) => {
        console.error('Error during signup:', error);
        alert(error.error?.message || 'appointment fail');
      },
    });

}else{

  alert("Please required fields ")
}
  
  

 }



}
