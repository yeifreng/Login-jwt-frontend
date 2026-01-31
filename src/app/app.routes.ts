import { Routes } from '@angular/router';
import { privateGuard, publicGuard } from './shared/guards/auth.guard';

export const routes: Routes = [

{
  path:'auth',
  canActivate:[publicGuard()],
  loadChildren: () => import('./auth/shell/auth.routes')
},
{
  path:'dashboard',
  canActivate:[privateGuard()],
  loadComponent: () => import('./dashboard/pages/dashboard/dashboard.component')
},
{
  path:'users',
  canActivate:[privateGuard()],
  loadComponent: () => import('./users/pages/users/users.component')
},
{
  path:'**',
  redirectTo: 'dashboard',
  pathMatch: 'full',
}

];
