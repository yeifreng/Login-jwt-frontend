import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { FormUtils } from '../../../utils/form-utils';
import { AuthService } from '../../services/auth.service';
import { Users } from '../../models/user.interface';


@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export default class SignUpComponent {

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

  // Definir el formulario de registro

  signUpForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  addSignUpForm() {

  // Ocultar toast si estaba visible
      this.showToast = false;

      //Validar el formulario
    if(this.signUpForm.invalid){
      this.signUpForm.markAllAsTouched();
      return;
    }

    // Activar loading
      this.loading = true;

    //Obtener los datos del formulario
    const userData: Users = {
      name: this.signUpForm.value.name,
      email: this.signUpForm.value.email,
      password: this.signUpForm.value.password
    };
    this._authService.signUp(userData).subscribe({
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
        message = 'Error al registrar usuario. Usuario ya existe.';
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
