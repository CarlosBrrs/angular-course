import { AuthorsService } from './authors.service';
import { CoursesService } from './courses.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { AuthorsComponent } from './authors/authors.component';

//Agregar el nuevo componente CoursesComponent al modulo de la App
//Se pueden generar los archivos necesarios para un nuevo componente en una nueva carpeta en app y agregarlos al modulo principal de la app con el comando: ng g c <nombreComponente>
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CoursesService, //Angular crea un singleton, similar al bean storage de Spring
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
