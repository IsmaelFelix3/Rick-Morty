import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

import { PrimeNGConfig } from "primeng/api";
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  visibleSidebar1: boolean = false;

  items: MenuItem[] = [];
  
  constructor(private api: ApiService,private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void 
  {
    this.items = [{
        label: 'Busqueda',
        items: [
          { routerLink: 'home', label: 'Home', icon: 'pi pi-home'},
          { routerLink: 'home/characters', label: 'Personajes', icon: 'pi pi-users'},
          { routerLink: 'home/locations', label: 'Ubicacion', icon: 'pi pi-globe'},
          { routerLink: 'home/episodes', label: 'Episodios', icon: 'pi pi-youtube'},
          { routerLink: 'home/comparacion', label: 'Comparacion', icon: 'pi pi-clone'}
        ]
      }]

    this.primengConfig.ripple = true;
  }

  

}
