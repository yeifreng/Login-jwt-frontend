import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormUtils } from '../../../utils/form-utils';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  formUtils = FormUtils;

  @Input() formGroup!: FormGroup;
  @Input() mode: 'login' | 'signup' = 'login';
  @Input() loading = false;

  @Output() submitForm = new EventEmitter<void>();

  onSubmit(){
    this.submitForm.emit();
  }

}
