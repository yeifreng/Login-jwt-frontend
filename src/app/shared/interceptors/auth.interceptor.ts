import { HttpErrorResponse, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { AuthStateService } from '../services/auth-state.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (
  request:HttpRequest<any>, next:HttpHandlerFn) => {
    const authState = inject(AuthStateService);
    const router = inject(Router)
    const token = authState.getSession();

    request = request.clone({
      setHeaders:{
        Authorization: `Bearer ${token?.access_token}`
      }
    })
  return next(request).pipe(
    catchError((error)=>{
      if (error instanceof HttpErrorResponse && error.status === 401 ) {
        authState.signOut();
        router.navigateByUrl('/auth/log-in')
      }
      return throwError(()=>error)
    })
  );
};
