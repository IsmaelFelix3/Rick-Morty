import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';


import { ApiService } from '../../services/api.service';
import { ResultEpisodio } from '../../interfaces/personajesCards.interface';

@Component({
  selector: 'app-detalle-episodio',
  templateUrl: './detalle-episodio.component.html',
  styleUrls: ['./detalle-episodio.component.css']
})
export class DetalleEpisodioComponent implements OnInit {

  episodio!: ResultEpisodio;
  ids: string[]=[];


  constructor(private api: ApiService, 
              private activatedRoute: ActivatedRoute,
              private router: Router) 
{
}

  ngOnInit(): void {

    this.activatedRoute.params.pipe(
      switchMap( ({id}) => this.api.getUnEpisodio(id))
    )
    .subscribe( episodio => {
      this.episodio = episodio;
      this.episodio.characters.forEach(personaje => 
        {
          this.ids.push(personaje.substring(42));
        })
    });
   
  }

  regresar()
  {
    this.router.navigate(['/home/episodes']);
  }

}

