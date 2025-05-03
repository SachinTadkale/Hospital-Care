import { Routes } from '@angular/router';

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
            (m) => m.OurSerivcesCardComponent
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
        path: 'book-appointment',
        pathMatch: 'full',
        loadComponent: () => {
          return import(
            './Pages/Dashboard/patient-dashboard/Sidebar-Sections/book-appointment/book-appointment.component'
          ).then((m) => m.BookAppointmentComponent);
        },
      },
      {
        path: 'doctors-availability',
        pathMatch: 'full',
        loadComponent: () => {
          return import(
            './Pages/Dashboard/patient-dashboard/Sidebar-Sections/doctors-availability/doctors-availability.component'
          ).then((m) => m.DoctorsAvailabilityComponent);
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
      },
    ],
  },
];
