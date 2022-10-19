import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  constructor() { }

  log(x: NgModel) {
    console.log(x);
  }

  submit(f: NgForm) {
    console.log(f);
  }

  contactMethods = [
    {id:1, name: 'Email'},
    {id:2, name: 'SMS'},
    {id:3, name: 'Phone'}
  ]
}
