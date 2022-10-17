import { SummaryPipe } from './summary.pipe';
import { AuthorsService } from './authors.service';
import { CoursesService } from './courses.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { AuthorsComponent } from './authors/authors.component';
import { StarComponent } from './star/star.component';
import { CapitalizeComponent } from './capitalize/capitalize.component';
import { CustomCapitalizePipe } from './customCapitalize.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';

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
    InputFormatDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CoursesService, //Angular crea un singleton, similar al bean storage de Spring
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
