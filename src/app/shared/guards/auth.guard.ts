import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthStateService } from '../services/auth-state.service';

export const privateGuard =(): CanActivateFn => {
  return () =>{
    const _authState = inject(AuthStateService);
    const _router = inject(Router);

    const session = _authState.getSession();
    if(session){
      return true;
    }
    _router.navigateByUrl('/auth/log-in')
    return false;
  }
};

export const publicGuard =(): CanActivateFn => {
  return () =>{
    const _authState = inject(AuthStateService);
    const _router = inject(Router);

    const session = _authState.getSession();

    if(session){
      _router.navigateByUrl('/dashboard')
    return false;
    }
    return true;
  }
};
