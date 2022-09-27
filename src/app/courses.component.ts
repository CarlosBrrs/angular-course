import { CoursesService } from './courses.service';
//import para volver esta clase un componente
import { Component } from "@angular/core";

@Component({
    selector: 'courses',  //<courses> "courses" --- <div class="courses"> ".courses" --- <div id="courses"> "#courses"
    //template: '<h2>Courses</h2>'
    //Doble {} para renderizar contenido dinamicamente o llamar métodos (a esta sintaxis se le conoce como INTERPOLACION)
    // Con backtick `` ( alt gr + } ) se puede escribir en varias lineas
    //Se usan directivas de Angular, en este caso se itera cada course en courses
    template: `
                <h2>{{ "Title: " + title + " ... "+ getTitle()}}</h2>
                <ul>
                    <li *ngFor="let courseLocal of coursesLocal">
                        {{ courseLocal }}
                    </li>
                </ul>
                <br/>
                <ul>
                    <li *ngFor="let courseService of coursesFromService">
                        {{ courseService }}
                    </li>
                </ul>
              `
})
export class CoursesComponent {
    title = "List of courses";

    getTitle() {
        return this.title;
    }

    //Se pasa al service y aqui se deja solo la variable sin asignar
    coursesLocal = ["Math","Science","Geography"];
    //Variable sin asignar, se asigna en el constructor
    coursesFromService;

    /*
    Opciones para obtener la data del backend 
    1.Logica para llamar servicios endpoints HTTP.
        Si se escribe aquí, queda fuertemente acoplada al servicio backend y hay que repetir la logica en cualquier otro lugar donde se quiera usar la informacion y un componente
        no deberia incluir ninguna logica diferente a la logica de presentacion (que pasa cuando nos colocamos sobre un boton, etc)
    2. Usar un servicio 
    */

    //De esta manera queda igualmente fuertemente acoplado, se puede usar el constructor con parámetros para
    /* constructor() {
        let service = new CoursesService();
        this.coursesFromService = service.getCourses();
    } */

    //IMPORTANTE: Las dependencias del constructor, en este caso CoursesService se deben registrar en el app.module.ts en la parte de providers como CoursesService
    constructor(service: CoursesService) {
        this.coursesFromService = service.getCourses();
    }
}