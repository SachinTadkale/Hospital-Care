import { Component } from '@angular/core';
import { OurSerivcesCardComponent } from '../../../Components/cards/our-serivces-card/our-serivces-card.component';
import { OurTeamCardComponent } from '../../../Components/cards/our-team-card/our-team-card.component';
import { LandingFooterComponent } from '../../../Components/footers/landing-footer/landing-footer.component';
import { TestimonialCardComponent } from '../../../Components/cards/testimonial-card/testimonial-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    OurSerivcesCardComponent,
    OurTeamCardComponent,
    TestimonialCardComponent,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
