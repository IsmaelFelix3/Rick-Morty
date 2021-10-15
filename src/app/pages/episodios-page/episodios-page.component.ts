import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ResultEpisodio, Result } from '../../interfaces/personajesCards.interface';

@Component({
  selector: 'app-episodios-page',
  templateUrl: './episodios-page.component.html',
  styleUrls: ['./episodios-page.component.css']
})
export class EpisodiosPageComponent implements OnInit {

  episodios: ResultEpisodio[] = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getDataFromService();
  }
  
  getDataFromService()
  {
    return this.api.getPorEpisodios().subscribe( (data:any) => {
      const {results} = data;
      
      this.episodios = results;
    })
  }

}
