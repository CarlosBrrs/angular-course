import { SignupFormComponent } from './signup-form/signup-form.component';
import { SummaryPipe } from './summary.pipe';
import { AuthorsService } from './authors.service';
import { CoursesService } from './courses.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { AuthorsComponent } from './authors/authors.component';
import { StarComponent } from './star/star.component';
import { CapitalizeComponent } from './capitalize/capitalize.component';
import { CustomCapitalizePipe } from './customCapitalize.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { ArrayCourseFormComponent } from './array-course-form/array-course-form.component';

//Agregar el nuevo componente CoursesComponent al modulo de la App
//Se pueden generar los archivos necesarios para un nuevo componente en una nueva carpeta en app y agregarlos al modulo principal de la app con el comando: ng g c <nombreComponente>
// con el comando: npm install bootstrap --save descarga bootstrap y lo almacena en el folder de modulos de node, y con --save se agrega a las dependencias en package.json
//Con el comando: npm install descargas todas las dependencias relacionadas en package.json
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent,
    SummaryPipe,  //Se agrega el nuevo Pipe en las declaraciones 
    StarComponent,
    CapitalizeComponent,
    CustomCapitalizePipe,
    PanelComponent,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    NewCourseFormComponent,
    SignupFormComponent,
    ArrayCourseFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CoursesService, //Angular crea un singleton, similar al bean storage de Spring
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
