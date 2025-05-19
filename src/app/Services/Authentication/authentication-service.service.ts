import { Injectable } from '@angular/core';
import { userData } from '../../model/user-data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { AuthRequest } from '../../model/authrequest';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  private baseUrl = "http://localhost:8080/api";


  constructor(private http:HttpClient) {}

  register(user:userData): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user, { responseType: 'json' });
  }


  login(data: any): Observable<string> {
  return this.http.post(`${this.baseUrl}/login`, data, { responseType: 'text' });
}



}
