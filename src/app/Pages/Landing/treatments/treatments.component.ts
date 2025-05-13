import { CommonModule } from '@angular/common';

import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-our-serivces-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './treatments.component.html',
  styleUrl: './treatments.component.css'
})
export class TreatmentsComponent {
  constructor(private sanitizer: DomSanitizer) {}

  Services: any[] = [
    {
      videoId: 'UQH3GWsCmr8',
      title: 'Dental treatments',
      content: `We offer complete dental care including cleaning, fillings, braces, and smile makeovers.`,
    },
    {
      videoId: '3O_boTBkX-U',
      title: 'Bones treatments',
      content: `We offer specialized care for fractures, joint issues, and bone-related surgeries.`,
    },
    {
      videoId: 'Y1JWniddM0Y',
      title: 'Diagnosis',
      content: `Advanced diagnostic services including lab tests, X-rays, and imaging.`,
    },
    {
      videoId: '28CYhgjrBLA',
      title: 'Cardiology',
      content: `Expert care for heart conditions with advanced diagnostics and treatments.`,
    },
    {
      videoId: '1RkseDeYS9g',
      title: 'Surgery',
      content: `Safe and specialized surgical treatments for various conditions.`,
    },
    {
      videoId: '0-QxYRg5Gis',
      title: 'Eye care',
      content: `Complete eye care services from vision tests to advanced treatments and surgeries.`,
    },
  ];

  getSafeUrl(videoId: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/' + videoId
    );
  }
}

