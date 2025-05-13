import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-nav',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './landing-nav.component.html',
  styleUrl: './landing-nav.component.css'
})
export class LandingNavComponent {
  dropdownVisible = false;
  servicesDropdownVisible = false;
  selectedScheme: any = null;

  schemes = [
    {
      id: 'ayushman',
      name: 'Ayushman Bharat',
      description: 'Provides ₹5 lakh coverage per family.',
      eligibility: 'Low-income families',
      benefits: 'Free hospitalization up to ₹5 lakh.'
    },
    {
      id: 'jsy',
      name: 'Janani Suraksha Yojana',
      description: 'Promotes institutional deliveries.',
      eligibility: 'Pregnant women below poverty line',
      benefits: 'Cash benefit on delivery.'
    }
  ];

  constructor(private router: Router) {}

  toggleDropdown(): void {
    this.dropdownVisible = !this.dropdownVisible;
  }

  toggleServicesDropdown(): void {
    this.servicesDropdownVisible = !this.servicesDropdownVisible;
  }

  handleServicesClick(section: 'facilities' | 'beauty'): void {
  this.router.navigate(['/services'], { fragment: section });
}


}
