import { CoursesService } from './courses.service';
//import para volver esta clase un componente
import { Component } from "@angular/core";

@Component({
    selector: 'courses',  //<courses> "courses" --- <div class="courses"> ".courses" --- <div id="courses"> "#courses"
    //template: '<h2>Courses</h2>'
    //Doble {} para renderizar contenido dinamicamente o llamar métodos (a esta sintaxis se le conoce como INTERPOLACION)
    // Con backtick `` ( alt gr + } ) se puede escribir en varias lineas
    //Se usan directivas de Angular, en este caso se itera cada course en courses
    //Se pueden usar property bindings tambien para insertar, mejoran la readability del codigo
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

                <!-- <img src="{{ imageUrl }}" /> Forma interpolación-->
                <img [src]="imageUrl" /> <!-- Forma binding solo funciona del component al dom, por ej, de un input field al componente, no funcionará -->

                <table>
                    <tr>
                        <!-- Sin el attr. colspan no funcionará porque no esta mapeado dentro de los atributos del DOM del elemento HTML td-->
                        <td [attr.colspan]="colSpan"></td>
                    </tr>
                </table>

                <!-- Funcionando con la importacion de bootstrap en styles.css -->
                <!-- Class binding: Si la variable isActive es true, la clase muestra btn, btn-primary y active, si es false solo muestra btn y btn-primary -->
                <!-- Style binding: activa o desactiva estilos dependiendo de condiciones del DOM, en este caso, del backgroundColor del boton -->
                <button class="btn btn-primary" [class.active]="isActive" [style.backgroundColor]="isActive ? 'blue' : 'gray'">Save</button>
              `
})
export class CoursesComponent {
    title = "List of courses";
    imageUrl = "https://picsum.photos/400/200";
    colSpan = 2;
    isActive = true;

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