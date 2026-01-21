import { Component, inject } from '@angular/core';
import { FormUtils } from '../../../utils/form-utils';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Users } from '../../models/user.interface';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export default class LogInComponent {

    formUtils = FormUtils;
    private _authService = inject(AuthService);
    private _router = inject(Router);
    fb = inject(FormBuilder)


    // Agregar estado de loading
    loading = false;
    //Manejo del toast error
    showToast = false;
    toastMessage = '';
    toastType: 'error' | 'success' = 'error'; // Puedes extender esto si necesitas más tipos


    // Definir el formulario de inicio de sesión
    logInForm: FormGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })

    addLogInForm() {

      // Ocultar toast si estaba visible
      this.showToast = false;


        //Validar el formulario
      if(this.logInForm.invalid){
        this.logInForm.markAllAsTouched();
        return;
      }

      // Activar loading
      this.loading = true;


        //Obtener los datos del formulario
      const userData: Users = {
        name: this.logInForm.value.name,
        email: this.logInForm.value.email,
        password: this.logInForm.value.password
      };

      this._authService.logIn(userData).subscribe({
        next: (response) => {
          // Desactivar loading al recibir respuesta
          this.loading = false;

          this._router.navigateByUrl('/dashboard');
        },
        error: (error) => {
          // Desactivar loading en caso de error
          this.loading = false;
           // Mostrar toast con mensaje de error
        this.showErrorToast(error);
        }

      });

    }



    showErrorToast(error:any){
      let message = 'Error l iniciar sesión.';

      if (error.status === 400) {
        message = 'Credenciales incorrectas. Verifica tu email y contraseña.';
      } else if (error.status === 404) {
        message = 'Usuario no encontrado.';
      } else if (error.status === 0) {
        message = 'Error de conexión. Verifica tu internet.';
      } else if (error.status === 500) {
        message = 'Error del servidor. Por favor, intenta más tarde.';
      }


      this.toastMessage = message;
      this.toastType = 'error';
      this.showToast = true;

      setTimeout(()=>{
        this.showToast = false;
      }, 3000);
      }

      closeToast(){
        this.showToast = false;
      }

}
