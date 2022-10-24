import { UsernameValidators } from './username.validators';
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
    //Tercer parametro: Validatores asincronos.
    username: new FormControl('',   //Puede ser FormControl o FormGroup ya que ambos heredan de AbstractControl. Depende de la necesidad especifica a validar. Si no lanza error, la key se puede usar sin comillas simples
     [Validators.required,
      Validators.minLength(3),
      UsernameValidators.cannotContainSpaces], //Custom validator
      UsernameValidators.shouldBeUnique), //Async validator
    password: new FormControl('', Validators.required)
  });

/* Para nested FormGroups el objeto a usar seria este
  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    })
  }); */

  //Siempre va a retornar login erroneo por propositos demostrativos
  login() {
    // this.username?.setErrors Si quisieramos setear errores al FormControl y no al FormGroup
    this.form.setErrors({
      invalidLogin: true
    });
  }

  get username() {
    return this.form.get('username');
    // return this.form.get('account.username'); return a usar si fuera nested FormGroups
  }
}
