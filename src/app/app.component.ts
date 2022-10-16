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
}
