import { AuthorsService } from './../authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  ngOnInit(): void {
  }

  authorsFromService;

  constructor(service: AuthorsService) {
    this.authorsFromService = service.getAuthors();
  }

}
