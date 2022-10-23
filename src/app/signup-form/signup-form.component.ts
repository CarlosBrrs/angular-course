import { Component } from '@angular/core';
import {FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  form = new FormGroup({
    username: new FormControl(), //Puede ser FormControl o FormGroup ya que ambos heredan de AbstractControl. Depende de la necesidad especifica a validar. Si no lanza error, la key se puede usar sin comillas simples
    password: new FormControl()
  });
}
