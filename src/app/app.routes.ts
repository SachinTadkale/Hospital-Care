import { Routes } from '@angular/router';
import { VerifyOtpComponent } from './Pages/Authentication/verify-otp/verify-otp.component';
import { LandingLayoutComponent } from './Pages/Landing/landing-layout/landing-layout.component';
import { LandingNavComponent } from './Components/navbars/landing-nav/landing-nav.component';
import { BookAppointmentComponent } from './Pages/Dashboard/patient-dashboard/Sidebar-Sections/book-appointment/book-appointment.component';
import { authGuard } from './routegard/auth.guard';




export const routes: Routes = [
  {
    
    path: '',
    loadComponent: () => {
      return import(
        './Pages/Landing/landing-layout/landing-layout.component'
      ).then((m) => m.LandingLayoutComponent);
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () => {
          return import('./Pages/Landing/home/home.component').then(
            (m) => m.HomeComponent
          );
        },
      },
      {
        path: 'services',
        pathMatch: 'full',
        loadComponent: () => {
          return import('./Pages/Landing/services/services.component').then(
            (m) =>m.ServicesComponent
          );
        },
      },
      {
        path: 'treatments',
        pathMatch: 'full',
        loadComponent: () => {
          return import('./Pages/Landing/treatments/treatments.component').then(
            (m) => m.TreatmentsComponent
          );
        },
      },
      {
        path: 'testimonials',
        pathMatch: 'full',
        loadComponent: () => {
          return import(
            './Pages/Landing/testimonials/testimonials.component'
          ).then((m) => m.TestimonialCardComponent);
        },
      },
      {
        path: 'contactus',
        pathMatch: 'full',
        loadComponent: () => {
          return import('./Pages/Landing/contact-us/contact-us.component').then(
            (m) => m.ContactUsComponent
          );
        },
      },
    ],
  },
  {
    path: 'signup',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./Pages/Authentication/signup/signup.component').then(
        (m) => m.SignupComponent
      );
    },
  },
  {
    path: 'login',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./Pages/Authentication/login/login.component').then(
        (m) => m.LoginComponent
      );
    },
  },

  // <------------------------------ Dashboard ------------------------------>
{path:'book-appointment', component:BookAppointmentComponent},
  {
    path: 'patient-dashboard',
    loadComponent: () => {
      return import(
        './Pages/Dashboard/patient-dashboard/patient-dashboard.component'
      ).then((m) => m.PatientDashboardComponent);
    
    },
    children: [
      
  
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () => {
          return import(
            './Pages/Dashboard/patient-dashboard/Sidebar-Sections/patient-dashboard-home/patient-dashboard-home.component'
          ).then((m) => m.PatientDashboardHomeComponent);
        },
      },
      {
        path: 'profile',
        pathMatch: 'full',
        loadComponent: () => {
          return import(
            './Pages/Dashboard/patient-dashboard/Sidebar-Sections/profile/profile.component'
          ).then((m) => m.ProfileComponent);
        },
      },
        
      {
        path: 'medical-history',
        pathMatch: 'full',
        loadComponent: () => {
          return import(
            './Pages/Dashboard/patient-dashboard/Sidebar-Sections/medical-history/medical-history.component'
          ).then((m) => m.MedicalHistoryComponent);
        },
      },
      
      {
        path: 'patient-reports',
        pathMatch: 'full',
        loadComponent: () => {
          return import(
            './Pages/Dashboard/patient-dashboard/Sidebar-Sections/patient-reports/patient-reports.component'
          ).then((m) => m.PatientReportsComponent);
        },
      }
    
    ],canActivate:[authGuard]
  },
  {
    path: 'scheme/:id',
    loadComponent: () =>
      import('./Pages/Schemes/scheme-detail/scheme-detail.component')
        .then(m => m.SchemeDetailComponent)
  },{
    path:'verifyOtp', component:VerifyOtpComponent
  },{path:'landing', component:LandingLayoutComponent}
];
  
  
    
