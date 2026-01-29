import { Component, inject } from '@angular/core';
import { FormUtils } from '../../../utils/form-utils';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Users } from '../../models/user.interface';
import { FormComponent } from "../../components/form/form.component";
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [ReactiveFormsModule, FormComponent],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export default class LogInComponent {

    formUtils = FormUtils;
    private _authService = inject(AuthService);
    private _router = inject(Router);
    fb = inject(FormBuilder)
    private toastService = inject(ToastService);


    // Agregar estado de loading
    loading = false;
    //Manejo del toast erro


    // Definir el formulario de inicio de sesión
    logInForm: FormGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })

    addLogInForm() {


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
        this.toastService.show('Error al iniciar sesión. Por favor, verifica tus credenciales e intenta de nuevo.', 'error')
        }

      });

    }


}
