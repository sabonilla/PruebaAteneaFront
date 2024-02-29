import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'activos',
    loadComponent: () => import('./pages/activofijodash/activofijodash.component'),
  },
  {
    path: 'areas',
    loadComponent: () => import('./pages/areadashboard/areadashboard.component')

  },
  {
    path: '',
    redirectTo: '/activos',
    pathMatch: 'full'
  }
];
