import { Routes } from '@angular/router';
import { FighterResolverGuard } from './guards/fighter-resolver.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
    canActivate: [FighterResolverGuard],
    title: 'Home',
  },
];
