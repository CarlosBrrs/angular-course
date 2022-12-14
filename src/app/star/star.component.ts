//Para el primer enfoque se necesita importar Input y se anota el field con @Input()...
import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
  //, inputs: ['isFavorite'] //Para el segundo enfoque no se necesita el import ni la anotacion, solo incluir el campo en el component
  // Va a tomar el estilo de aca aunque ya tenga algo definido en el archivo dispuesto para estilos del componente
  ,styles: [
    `
    .bi {
    color: blue;
    }
    `
  ],
  encapsulation: ViewEncapsulation.Emulated //Emula el shadowDOM (aplicar por ej estilos, a un solo objeto y no a todos iguales) y soporta la mayoria de browsers y versiones
})

export class StarComponent implements OnInit {

  //Queremos marcar este field como input property para poder usarlo en property binding expressions, como en el componente html, para info que viene del servidor. Hay 2 maneras
  @Input('is-favorite') //Opcional- Le coloca un alias para referirse a ella, en el html podemos bindear con is-favorite en lugar de isFavorite en la propiedad
  isFavorite = false; //Aqui se inicializa apagada la estrella

  //Se decora y a la variable que se usará se inicializa con EventEmitter() y se importa, con cada clic, va a emitir lo que esta en el metodo asignado a ese (change)
  @Output('change') //Aplica lo mismo de los alias para input, si cambio el nombre de la variable, no afectará porque el contrato se hace con el alias en el HTML
  change = new EventEmitter();

  changeOnClick() {
    this.isFavorite = !this.isFavorite;
    //this.change.emit(this.isFavorite);
    this.change.emit( { newValue: this.isFavorite } ); //Pueden ser objetos más complejos como un objeto
  }

  constructor() { }

  ngOnInit(): void {
  }

}

export interface StarChangeEventArgs {
  newValue: boolean
}
