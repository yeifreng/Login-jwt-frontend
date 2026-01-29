import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { FormUtils } from '../../../utils/form-utils';
import { AuthService } from '../../services/auth.service';
import { Users } from '../../models/user.interface';
import { FormComponent } from "../../components/form/form.component";
import { ToastService } from '../../../shared/services/toast.service';


@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, FormComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export default class SignUpComponent {

  formUtils = FormUtils;
  private _authService = inject(AuthService);
  private _router = inject(Router);
  fb = inject(FormBuilder)
  private toastService = inject(ToastService);


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
        this.toastService.show('Error al registrar usuario, El usuario que intentas registrar ya existe', 'error')
      }
    });

  }

}
