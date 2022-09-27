import { Injectable } from '@angular/core';

//Se necesita el decorador Injectable cuando el service tiene dependencias en su constructor

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }
}
