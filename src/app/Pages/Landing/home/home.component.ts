import { Component } from '@angular/core';
import { OurSerivcesCardComponent } from '../../../Components/cards/our-serivces-card/our-serivces-card.component';
import { OurTeamCardComponent } from '../../../Components/cards/our-team-card/our-team-card.component';
import { TestimonialCardComponent } from '../../../Components/cards/testimonial-card/testimonial-card.component';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../Services/Authentication/authentication-service.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    OurSerivcesCardComponent,
    OurTeamCardComponent,
    TestimonialCardComponent,
    RouterLink,
    
  ],
  providers: [AuthenticationService], // ✅ Add this line
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})

export class HomeComponent {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  bookAppointment(): void {
    const user = this.authService.getCurrentUser();

    if (user) {
      // User already logged in → go to book appointment directly
      this.router.navigate(['/book-appointment']);
    } else {
      // Not logged in → go to login, and pass a redirect parameter
      this.router.navigate(['/login'], {
        queryParams: { redirectTo: '/book-appointment' }
      });
    }
  }
}