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
  ]
}
