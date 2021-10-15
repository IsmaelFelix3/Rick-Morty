import { Component, Input, OnInit } from '@angular/core';
import { Result, Personaje } from '../../interfaces/personajesCards.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
  
  @Input() personaje!: Result;
  episode: number = 0;

  constructor() {
   }

  ngOnInit(): void {
    this.getEpisodio();
  }

  getEpisodio()
  {
    this.episode = Math.floor(Math.random() * this.personaje.episode.length);

    if(this.episode == 0)
    {
      this.episode=1;
    }
  }

}
