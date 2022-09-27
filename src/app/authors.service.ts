import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  getAuthors() {
    return ["Gabriel Garcia Marquez","Pablo Neruda","George R.R. Martin"];
  }
}
