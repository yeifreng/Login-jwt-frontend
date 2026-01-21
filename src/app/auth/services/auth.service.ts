import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Users } from '../models/user.interface';
import { Observable, tap } from 'rxjs';
import { StorageService } from '../../shared/services/storage.service';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _http = inject(HttpClient);
  private _storage = inject(StorageService);

   signUp(user:Users):Observable<Users>{
     return this._http.post<Users>(`${environment.API_URL}/auth/sign-up`,{
       name: user.name,
       email: user.email,
       password: user.password
     })
     .pipe(tap((response)=>{
        this._storage.set('session',JSON.stringify(response))
     }))
   }

   logIn(user:Users):Observable<Users>{
    return this._http.post<Users>(`${environment.API_URL}/auth/log-in`,{
       name: user.name,
       email: user.email,
       password: user.password
     })
     .pipe(tap((response)=>{
        this._storage.set('session',JSON.stringify(response))
     }))
  }
}
