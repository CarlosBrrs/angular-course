import { NgModel, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {

  constructor() { }

  categories = [
    {id:1, name:'Development'},
    {id:2, name:'Art'},
    {id:3, name:'Languages'}
  ];

  log(x: NgModel) {
    console.log(x);
    console.log(x.value);
  }
  
  formSubmited(form: NgForm) {
    console.log(form);
  }
}
