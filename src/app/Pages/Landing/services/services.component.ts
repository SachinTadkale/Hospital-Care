import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements AfterViewInit {
  selectedSection: 'facilities' | 'beauty' | null = null;

  facilities: { title: string; description: string; videoUrl: SafeResourceUrl }[] = [];
  beautyTreatments: { title: string; description: string; videoUrl: SafeResourceUrl }[] = [];

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {
    // Sanitize video URLs here
   this.facilities = [
  {
    title: '🛏️ Patient Room Comfort',
    description: `• Private or semi-private rooms
• Air-conditioned rooms
• In-room TV and Wi-Fi
• Adjustable hospital beds
• Attached bathrooms
• Family sleeper chairs or couches`,
    videoUrl: this.sanitize('https://www.youtube.com/embed/UQH3GWsCmr8')
  },
  {
    title: '🍽️ Food & Dining',
    description: `• Customizable meal plans (veg/non-veg, diabetic, etc.)
• Dietician consultations
• Room service for patients and families
• Cafeteria/lounge access`,
    videoUrl: this.sanitize('https://www.youtube.com/embed/N8REbJRWzYg') // You can replace this with a better match
  },
  {
    title: '👨‍👩‍👧‍👦 Visitor & Family Support',
    description: `• Comfortable waiting areas
• Family consultation rooms
• Visitor passes and time slots
• Guest lodging (for long-term stays)`,
    videoUrl: this.sanitize('https://www.youtube.com/embed/lwugvLjhKPY') // Replace if needed
  },
  {
    title: '🧹 Hygiene & Housekeeping',
    description: `• Daily housekeeping services
• Linen change
• Sanitized environment
• Laundry services`,
    videoUrl: this.sanitize('https://www.youtube.com/embed/28CYhgjrBLA') // Reusing hospital infra video
  },
  {
    title: '📡 Technology & Connectivity',
    description: `• High-speed internet access
• Digital info boards
• Nurse call systems`,
    videoUrl: this.sanitize('https://www.youtube.com/embed/N-p1QwY9FVE') // Optional tech-related video
  },
  {
    title: '✨ Additional Wellness & Services',
    description: `• Prayer room or meditation area
• Entertainment (TV, games, reading material)
• Pharmacy on-site
• ATM / mini convenience store
• Wheelchair/stretcher assistance
• Valet parking / shuttle services`,
    videoUrl: this.sanitize('https://www.youtube.com/embed/xvvZsD9fF0w') // General wellness/services
  }
];

    this.beautyTreatments = [
  {
    title: '💆‍♀️ Facial Treatments',
    description: `• HydraFacial
• Deep Cleansing Facial
• Anti-Aging Facial
• Brightening Facial
• Acne Treatment Facial`,
    videoUrl: this.sanitize('https://www.youtube.com/embed/Y1JWniddM0Y')
  },
  {
    title: '🌿 Skin Care Solutions',
    description: `• Chemical Peels
• Microdermabrasion
• Pigmentation Correction
• Skin Rejuvenation
• Scar Reduction`,
    videoUrl: this.sanitize('https://www.youtube.com/embed/0-QxYRg5Gis')
  },
  {
    title: '✨ Laser & Light Therapy',
    description: `• Laser Hair Removal
• Laser Skin Resurfacing
• IPL Photofacial
• Tattoo Removal
• Redness/Vein Reduction`,
    videoUrl: this.sanitize('https://www.youtube.com/embed/Mr6s9FZSzKc')
  },
  {
    title: '🧴 Body Treatments',
    description: `• Body Polishing
• Full Body Scrubs
• Skin Firming Therapy
• Back Acne Treatment
• Detox Body Wraps`,
    videoUrl: this.sanitize('https://www.youtube.com/embed/v2T_r52lqUY')
  },
  {
    title: '💉 Aesthetic Procedures',
    description: `• Botox & Fillers
• PRP (Vampire Facial)
• Derma Roller
• Mesotherapy
• Anti-Wrinkle Injections`,
    videoUrl: this.sanitize('https://www.youtube.com/embed/l-lMiCUXxLs')
  },
  {
    title: '🧘 Wellness & Glow Boosters',
    description: `• Vitamin Infusion Therapy
• Glutathione Glow Treatment
• Stress Relief Massage
• Skin Hydration Booster
• Relaxing Aromatherapy`,
    videoUrl: this.sanitize('https://www.youtube.com/embed/QfZxwjNw8gI')
  }
];

  }

  sanitize(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngAfterViewInit(): void {
    this.route.fragment.subscribe(fragment => {
      if (fragment === 'facilities' || fragment === 'beauty') {
        this.selectedSection = fragment;
      } else {
        this.selectedSection = null;
      }
    });
  }
}
