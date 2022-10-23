import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  form = new FormGroup({
    //Primer parametro: Valor inicial del FormControl. Opcional
    //Segundo parametro: Validator. Un ValidatorFn o un array de ValidatorFn
    //Primer parametro: Valor inicial del FormControl
    //Primer parametro: Valor inicial del FormControl
    username: new FormControl('', Validators.required), //Puede ser FormControl o FormGroup ya que ambos heredan de AbstractControl. Depende de la necesidad especifica a validar. Si no lanza error, la key se puede usar sin comillas simples
    password: new FormControl('', Validators.required)
  });

  get username() {
    return this.form.get('username');
  }
}
