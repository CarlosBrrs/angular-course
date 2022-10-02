//Para el primer enfoque se necesita importar Input y se anota el field con @Input()...
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
  //, inputs: ['isFavorite'] //Para el segundo enfoque no se necesita el import ni la anotacion, solo incluir el campo en el component
})
export class StarComponent implements OnInit {

  @Input()
  isFavorite = false; //Queremos marcar este field como input property para poder usarlo en property binding expressions, como en el componente html, para info que viene del servidor. Hay 2 maneras

  changeOnClick() {
    this.isFavorite = !this.isFavorite;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
