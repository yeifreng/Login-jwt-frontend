import { Routes } from "@angular/router";

export default [
  {
    path: 'log-in',
    loadComponent: () => import('../pages/log-in/log-in.component')

  },
  {
    path: 'sign-up',
    loadComponent: () => import('../pages/sign-up/sign-up.component')
  },
  {
    path: '**',
    redirectTo: 'log-in',
    pathMatch: 'full'
  }
] as Routes;
