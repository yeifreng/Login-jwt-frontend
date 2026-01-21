import { inject, Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Session } from '../models/session.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {

  private _storage = inject(StorageService);

signOut(){
  this._storage.remove('session');
}

getSession(): Session | null{
  let currentSession: Session | null = null;

  const maybeSession = this._storage.get<Session>('session');
  if(maybeSession !== null){
    if(this._isValidSession(maybeSession)){
      currentSession = maybeSession;
    }else{
      this.signOut();
    }
  }
  return currentSession;
}

private _isValidSession(maybeSession:unknown): boolean{

  return(
    typeof maybeSession === 'object' &&
    maybeSession !== null &&
    'access_token' in maybeSession
  );

}
}
