import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'array-course-form',
  templateUrl: './array-course-form.component.html',
  styleUrls: ['./array-course-form.component.css']
})
export class ArrayCourseFormComponent {

  constructor() { }

  form = new FormGroup({
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
