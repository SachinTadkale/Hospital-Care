import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from '../../../Services/Authentication/authentication-service.service';
import { AuthRequest } from '../../../model/authrequest';
import { PatientService } from '../../../Services/Patient/patient.service';
import { userData } from '../../../model/user-data';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {

 

  message: string = '';
  redirectTo: string | null = null;

  loginData: AuthRequest= {
    username:'',
    password:''
  };

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute, private userService: PatientService
  ) {}

  ngOnInit(): void {
  this.redirectTo = this.route.snapshot.queryParamMap.get('redirectTo');
  console.log('BookAppointmentComponent loaded');

}


  login(){

    if (this.loginData.username && this.loginData.password) {
      this.authService.login(this.loginData).subscribe({
        next: (res: string) => {
  alert('Login Successful!');
  localStorage.setItem('token', res); // `res` is already the token string
  this.router.navigate(['/patient-dashboard']);
},
        error: (error) => {
          console.error('Login failed:', error);
          alert('Invalid credentials, please try again.');
        }
      });

    } 
    else
     {
      alert('Please fill in all fields.');
    }
  
  
}



}
