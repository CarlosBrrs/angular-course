import { Component, EventEmitter } from '@angular/core';
import { StarChangeEventArgs } from './star/star.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';

  post = {
    title: "Title of the post",
    isFavorite: true
  }

  tweet = {
    body: "Body of the tweet...",
    likesCount: 0,
    isLiked: false
  }

  coursesFromServer!: CourseInterface[];

  // onStarChanged(isFavorite: boolean) {
  onStarChanged(eventArgs: StarChangeEventArgs) {
    console.log("Star changed: ", eventArgs);
  }

  courses = [1, 2];
  // Comentar arriba y descomentar abajo para cambiar el mensaje
  // courses = [];

  // Para setear el modo de vista en ngSwitch
  viewMode = 'map';

  // Para ngFor
  coursesNgFor = [
    {id: 1, name: 'Astronomy'},
    {id: 2, name: 'Physics'},
    {id: 3, name: 'Chemistry'}
  ];

  onAdd() {
    this.coursesNgFor.push({id:4, name: 'Analytics'});
  }

  onRemove(course: CourseInterface) {
    let index = this.coursesNgFor.indexOf(course);
    this.coursesNgFor.splice(index,1);
  }

  onChange(course: CourseInterface) {
    course.name = 'UPDATED';
  }

  // Cargando desde el servidor
  loadCourses() {
    this.coursesFromServer = [
      {id: 1, name: 'Astronomy'},
      {id: 2, name: 'Physics'},
      {id: 3, name: 'Chemistry'}
    ];
  }

  trackCourse(index: any, coursesFromServer: CourseInterface) {
    return coursesFromServer ? coursesFromServer.id : undefined;
  }

  canSave = false;

}

export interface CourseInterface {
  id: number,
  name: string
}