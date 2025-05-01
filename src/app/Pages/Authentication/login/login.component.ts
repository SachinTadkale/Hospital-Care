import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from '../../../Services/Authentication/authentication-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  message: string = '';

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  login(): void {
    this.message = this.authService.login(this.email, this.password);
     if (this.message === 'Login successful') {
      alert(this.message);
      this.router.navigate(['/patient-dashboard']);
    } else {
      alert('Invalid Credentials');
    }
  }
}
