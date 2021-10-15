import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ResultUbicacion } from '../../interfaces/personajesCards.interface';


@Component({
  selector: 'app-ubicaciones-page',
  templateUrl: './ubicaciones-page.component.html',
  styleUrls: ['./ubicaciones-page.component.css']
})
export class UbicacionesPageComponent implements OnInit {

  arreglo: ResultUbicacion[] = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getDataFromService();
  }

  getDataFromService()
  {
    this.api.getPorUbicacion().subscribe( (data:any) => 
    {
      const {results} = data;
      this.arreglo = results;
    });
  }

}
