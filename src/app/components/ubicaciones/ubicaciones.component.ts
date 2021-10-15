import { Component, Input, OnInit } from '@angular/core';

import { ResultUbicacion } from '../../interfaces/personajesCards.interface';

@Component({
  selector: 'app-ubicaciones',
  templateUrl: './ubicaciones.component.html',
  styleUrls: ['./ubicaciones.component.css']
})
export class UbicacionesComponent implements OnInit 
{
  @Input() ubicaciones!:ResultUbicacion;

  constructor() { }

  ngOnInit(): void {
  }

}
