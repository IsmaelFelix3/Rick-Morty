import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

import { Personaje, Result } from '../../interfaces/personajesCards.interface';

@Component({
  selector: 'app-personajes-page',
  templateUrl: './personajes-page.component.html',
  styleUrls: ['./personajes-page.component.css']
})
export class PersonajesPageComponent implements OnInit {

  personajes: Result[] = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getDataFromService();
  }

  getDataFromService(): void
  {

    this.api.getPersonajes().subscribe( (data:any) => {

      const {results} = data;

      this.personajes = results;

    })

  }

  

}
