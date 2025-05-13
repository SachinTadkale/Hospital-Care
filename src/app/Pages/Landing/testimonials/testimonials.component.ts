import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-testimonial-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
})
export class TestimonialCardComponent {
  constructor(private sanitizer: DomSanitizer) {}

  reviews: any[] = [
    {
      type: 'image',
      ImageUrl: 'assets/testimonial/img-1.jpg',
      title: 'Outstanding Care and Support',
      content:
        'Great care and attentive staff. Highly recommended for quality healthcare.',
      name: 'Emily R.',
    },
    {
      type: 'video',
      videoId: 'UQH3GWsCmr8',
      title: 'Life-Changing Experience',
      content:
        'The treatment transformed my life. Watch my story to learn more.',
      name: 'John D.',
    },
    {
      type: 'image',
      ImageUrl: 'assets/testimonial/img-3.jpg',
      title: 'Exceptional Professionalism',
      content:
        'Excellent professionalism and care from start to finish. Truly outstanding service.',
      name: 'David L.',
    },
     {
      type: 'image',
      ImageUrl: 'assets/testimonial/img-1.jpg',
      title: 'Outstanding Care and Support',
      content:
        'Great care and attentive staff. Highly recommended for quality healthcare.',
      name: 'Emily R.',
    },
    {
      type: 'video',
      videoId: 'UQH3GWsCmr8',
      title: 'Life-Changing Experience',
      content:
        'The treatment transformed my life. Watch my story to learn more.',
      name: 'John D.',
    },
    {
      type: 'image',
      ImageUrl: 'assets/testimonial/img-3.jpg',
      title: 'Exceptional Professionalism',
      content:
        'Excellent professionalism and care from start to finish. Truly outstanding service.',
      name: 'David L.',
    },
  ];

  getSafeUrl(videoId: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/' + videoId
    );
  }

  defaultImage(event: any) {
    event.target.src = 'assets/default.png';
  }
}
