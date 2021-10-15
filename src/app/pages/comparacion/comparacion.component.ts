import { Component, OnInit } from '@angular/core';

import { tap } from "rxjs/operators";

import { ApiService } from '../../services/api.service';
import { Result } from '../../interfaces/personajesCards.interface';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-comparacion',
  templateUrl: './comparacion.component.html',
  styleUrls: ['./comparacion.component.css']
})
export class ComparacionComponent implements OnInit {

  personajes: Result[]=[];

  personajesComparacion: Result[] = [];

  selectedItem: string[]=[];

  visualizarTarjetas: boolean = false;

  ids: string[]=[];

  dis: boolean = true;

  constructor( private api: ApiService,
               private fb: FormBuilder) {}

  form: FormGroup = this.fb.group({
    personaje1: ['',[Validators.required]],
    personaje2: ['',[Validators.required]],
    personaje3: ['',[Validators.required]]
  })

  ngOnInit(): void 
  {
    this.api.getPersonajes().subscribe( (data: any) => {
      const {results, ids} = data;
      this.personajes = results;
    });
  }

  enviar()
  {
    this.selectedItem = this.form.value;
    if(this.form.value !== 0)
    {
      this.dis = false;
    }
    this.api.getMultiplesPersonajes(this.selectedItem)
    .subscribe(
      data => this.personajesComparacion = data
      );
    
    this.agregarTarjetas();
  }

  agregarTarjetas()
  {
    this.visualizarTarjetas = true;
  }

  limpiar()
  {
    this.form.get('personaje1')?.reset();
    this.form.get('personaje2')?.reset();
    this.form.get('personaje3')?.reset();
    this.dis= true;
    this.visualizarTarjetas = false;
    this.personajesComparacion = [];
    this.ngOnInit();
  }

  quitar(e: any)
  {
    console.log(e.value);
    this.personajes.splice(e.value-1,1);
  }

}
