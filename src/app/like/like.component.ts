import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {

  @Input('is-active')
  isActive!: boolean;

  @Input('likes-count')
  likesCount!: number;

  onClick() {
    this.isActive = !this.isActive;
    this.likesCount += (this.isActive) ? +1 : -1;
  }
}
