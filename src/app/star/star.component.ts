//Para el primer enfoque se necesita importar Input y se anota el field con @Input()...
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
  //, inputs: ['isFavorite'] //Para el segundo enfoque no se necesita el import ni la anotacion, solo incluir el campo en el component
})
export class StarComponent implements OnInit {

  //Queremos marcar este field como input property para poder usarlo en property binding expressions, como en el componente html, para info que viene del servidor. Hay 2 maneras
  @Input('is-favorite') //Opcional- Le coloca un alias para referirse a ella, en el html podemos bindear con is-favorite en lugar de isFavorite en la propiedad
  isFavorite = false; //Aqui se inicializa apagada la estrella

  changeOnClick() {
    this.isFavorite = !this.isFavorite;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
