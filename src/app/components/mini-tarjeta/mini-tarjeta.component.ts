import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Result } from '../../interfaces/personajesCards.interface';

@Component({
  selector: 'app-mini-tarjeta',
  templateUrl: './mini-tarjeta.component.html',
  styleUrls: ['./mini-tarjeta.component.css']
})
export class MiniTarjetaComponent implements OnInit {

  @Input() ids: string[] = [];

  personajes: Result[]=[];

  constructor(private api: ApiService) { }

  ngOnInit(): void {

    this.api.getMultiplesPersonajes(this.ids).subscribe( data => { this.personajes = data });

  }

}
