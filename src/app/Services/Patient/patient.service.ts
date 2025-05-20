import { Injectable } from '@angular/core';
import { Patient } from '../../model/patient-data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { userData } from '../../model/user-data';
import { patientAppointment } from '../../model/bookappointment';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  
 private baseUrl = 'http://localhost:8080/api'; // change to your backend URL

  constructor(private http: HttpClient) {}

  getUserById(): Observable<userData> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get<userData>(`${this.baseUrl}/getUserById`, { headers });
  }



  bookAppointment(patient:patientAppointment): Observable<any> {
    return this.http.post(`${this.baseUrl}/addAppointment`, patient, { responseType: 'json' });
  }

 

 
}
