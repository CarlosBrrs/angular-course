import { FormGroup, FormArray, FormControl, FormBuilder, Validators, Validators.required } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'array-course-form',
  templateUrl: './array-course-form.component.html',
  styleUrls: ['./array-course-form.component.css']
})
export class ArrayCourseFormComponent {

  constructor() { }
  /* Usando esta manera se puede eliminar el objeto form de la linea 26 y emplear solo formBuilder, esta manera es un poco mas limpia 
  constructor(fb: FormBuilder) {
    this.formBuilder = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: [],
        phone: []
      }),
      topics: fb.array([])
    });
   }

   formBuilder; */

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    contact: new FormGroup({
      email: new FormControl(),
      phone: new FormControl()
    }),
    topics: new FormArray([])
  });

  addTopic(topic: HTMLInputElement) {
    
    this.topics.push(new FormControl(topic.value));
    console.log(this.topics);
    topic.value = '';
  }

  removeTopic(topic: string) {
    let topicObj = new FormControl(topic); //Sin esta linea tambien funciona, indexOf topic
    let index = this.topics.controls.indexOf(topicObj);
    this.topics.removeAt(index);
  }

  getControls() {
    return this.topics.controls;
  }

  get topics() {
    return (this.form.get('topics') as FormArray);
  }

}
