import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Result } from 'src/app/interfaces/personajesCards.interface';

@Component({
  selector: 'app-comparacion-tarjeta',
  templateUrl: './comparacion-tarjeta.component.html',
  styleUrls: ['./comparacion-tarjeta.component.css']
})
export class ComparacionTarjetaComponent implements OnInit,OnChanges, OnDestroy {

  @Input() personajes: Result[];
  episode: number = 0;

  comparacion12: string[]=[];
  comparacion13: string[]=[];
  comparacion23: string[]=[];

  personaje1: string;
  personaje2: string;
  personaje3: string;

  constructor() {
    this.personajes=[];
    this.personaje1='';
    this.personaje2='';
    this.personaje3='';
  }

  ngOnChanges()
  {
    this.buscarEpisodiosEnComun();
  }

  ngOnInit(): void {
  }

  ngOnDestroy()
  {
    this.personajes=[];
    this.personaje1='';
    this.personaje2='';
    this.personaje3='';
    this.comparacion12 = [];
    this.comparacion13 = [];
    this.comparacion23 = [];
  }

  buscarEpisodiosEnComun()
  {

    this.personaje1 = this.personajes[0].name;
    this.personaje2 = this.personajes[1].name;
    this.personaje3 = this.personajes[2].name;

    let array1 = this.personajes[0].episode || null;
    let array2 = this.personajes[1].episode || null;
    let array3 = this.personajes[2].episode || null;

    

    for(let index = 0; index < array1.length; index++) 
    {
      for(let j = 0; j < array2.length; j++)
      {
        if(array1[index] === array2[j])
        {
          this.comparacion12.push(array1[index]);
        }
      }
    }

    for(let index = 0; index < array1.length; index++) 
    {
      for(let j = 0; j < array3.length; j++)
      {
        if(array1[index] === array3[j])
        {
          this.comparacion13.push(array1[index]);
        }
      }
    }

    for(let index = 0; index < array2.length; index++) 
    {
      for(let j = 0; j < array3.length; j++)
      {
        if(array2[index] === array3[j])
        {
          this.comparacion23.push(array2[index]);
        }
      }
    }
  }

}
