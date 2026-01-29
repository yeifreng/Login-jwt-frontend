import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private _message = signal('');
  private _type = signal<'success' | 'error' | 'info' | 'warning'>('info');
  private _visible = signal(false);

  message = this._message.asReadonly();
  type = this._type.asReadonly();
  visible = this._visible.asReadonly();

  show(
    message: string,
    type: 'success' | 'error' | 'info' | 'warning' = 'info',
    duration: number = 3000
  ) {
    this._message.set(message);
    this._type.set(type);
    this._visible.set(true);

    setTimeout(() => {
      this._visible.set(false);
    }, duration);
  }

  hide() {
    this._visible.set(false);
  }
}
