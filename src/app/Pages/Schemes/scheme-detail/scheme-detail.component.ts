import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-scheme-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './scheme-detail.component.html',
  styleUrl: './scheme-detail.component.css'
})
export class SchemeDetailComponent implements OnInit {
  schemeId: string = '';
  scheme: any;
  userForm: any = {
    fullName: '',
    aadhaar: '',
    incomeProof: null
  };

  allSchemes = [
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

  constructor(private route: ActivatedRoute, private router: Router) {}


  ngOnInit(): void {
    this.schemeId = this.route.snapshot.paramMap.get('id') || '';
    this.scheme = this.allSchemes.find(s => s.id === this.schemeId);
  }

  submitForm() {
    console.log('Form submitted:', this.userForm);
    alert('Form submitted successfully!');
     this.router.navigate(['/']);
  }

  onFileSelected(event: Event): void {
  const fileInput = event.target as HTMLInputElement;
  if (fileInput.files && fileInput.files.length > 0) {
    this.userForm.incomeProof = fileInput.files[0];
  }
}

}
