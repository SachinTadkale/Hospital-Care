import { Component } from '@angular/core';
import { LandingNavComponent } from '../../../Components/navbars/landing-nav/landing-nav.component';
import { RouterOutlet } from '@angular/router';
import { LandingFooterComponent } from '../../../Components/footers/landing-footer/landing-footer.component';


@Component({
  selector: 'app-landing-layout',
  standalone: true,
  imports: [LandingNavComponent, RouterOutlet, LandingFooterComponent],
  templateUrl: './landing-layout.component.html',
  styleUrl: './landing-layout.component.css',
})
export class LandingLayoutComponent {}
