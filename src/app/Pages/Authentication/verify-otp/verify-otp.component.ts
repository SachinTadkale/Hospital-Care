import { Component } from '@angular/core';
import { OtpverifyService } from '../../../Services/OtpVerifyService/otpverify.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-verify-otp',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './verify-otp.component.html',
  styleUrl: './verify-otp.component.css'
})
export class VerifyOtpComponent {

  
    email: string = '';
  otp: string = '';
  otpSent: boolean = false;
  message: string = '';
  isLoading: boolean = false; // <-- for progress bar

  constructor(private otpService:OtpverifyService, private router: Router) {}

  sendOtp() {
    this.isLoading = true;
    this.otpService.sendOtp(this.email).subscribe({
      next: (response) => {
          this.isLoading = false;
        this.otpSent = true;
        this.message = response.message;
      },
      error: () => {
        this.message = 'Failed to send OTP.';
      }
    });
  }

  verifyOtp() {
    this.isLoading = true;
    this.otpService.verifyOtp(this.email, this.otp).subscribe({
      next: (response) => {
          this.isLoading = false;
        this.message = response.message;
         // Navigate and pass data using router state
      this.router.navigate(['/book-appointment'], { state: { email: this.email } });
      },
      error: () => {
        this.message = 'Invalid OTP.';
      }
    });
  }

  cancel() {
  this.email = '';
  this.otp = '';
  this.otpSent = false;
  this.message = '';
}

}
