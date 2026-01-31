import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Users } from '../../auth/models/user.interface';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    private _http = inject(HttpClient);

    getusers(): Observable<Users[]>{
      return this._http.get<Users[]>(`${environment.API_URL}/users`).pipe(
        map((response)=>{
        return response.map(
          (user) =>({
          name: user.name,
          email: user.email
        })
      );

      })
      );
    }
}
