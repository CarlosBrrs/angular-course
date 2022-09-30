import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  isFavorite = false;

  changeOnClick() {
    this.isFavorite = !this.isFavorite;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
