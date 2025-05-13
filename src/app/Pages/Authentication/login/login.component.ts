import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from '../../../Services/Authentication/authentication-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  message: string = '';
  redirectTo: string | null = null;

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
  this.redirectTo = this.route.snapshot.queryParamMap.get('redirectTo');
  console.log('BookAppointmentComponent loaded');

}


  login(): void {
  const trimmedEmail = this.email.trim();
  const trimmedPassword = this.password.trim();

  this.message = this.authService.login(trimmedEmail, trimmedPassword);

  if (this.message === 'Login successful') {
    alert(this.message);

    if (this.redirectTo) {
      // Convert 'patient-dashboard/book-appointment' to a navigation array
      this.router.navigate(this.redirectTo.split('/'));
    } else {
      // Default to patient dashboard
      this.router.navigate(['/patient-dashboard']);
    }
  } else {
    alert(this.message); // Invalid credentials
  }
}

}
