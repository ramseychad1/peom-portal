import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/vision', pathMatch: 'full' },
  {
    path: 'vision',
    loadComponent: () => import('./pages/vision-tab/vision-tab.component')
      .then(m => m.VisionTabComponent)
  },
  {
    path: 'structure',
    loadComponent: () => import('./pages/structure-tab/structure-tab.component')
      .then(m => m.StructureTabComponent)
  },
  {
    path: 'lifecycle',
    loadComponent: () => import('./pages/lifecycle-tab/lifecycle-tab.component')
      .then(m => m.LifecycleTabComponent)
  },
  {
    path: 'msp',
    loadComponent: () => import('./pages/msp-tab/msp-tab.component')
      .then(m => m.MSPTabComponent)
  },
  { path: '**', redirectTo: '/vision' }
];
