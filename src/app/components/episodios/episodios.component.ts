import { Component, Input, OnInit } from '@angular/core';
import { ResultEpisodio } from '../../interfaces/personajesCards.interface';

@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.component.html',
  styleUrls: ['./episodios.component.css']
})
export class EpisodiosComponent implements OnInit {

  @Input() episodio!: ResultEpisodio;

  constructor() { }

  ngOnInit(): void {}

}
