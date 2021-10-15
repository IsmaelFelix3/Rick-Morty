import { Component } from "@angular/core";
import { Routes } from "@angular/router";


import { HomeComponent } from "./home/home.component";
import { PersonajesPageComponent } from './pages/personajes-page/personajes-page.component';
import { UbicacionesPageComponent } from './pages/ubicaciones-page/ubicaciones-page.component';
import { EpisodiosPageComponent } from './pages/episodios-page/episodios-page.component';

export const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, 
    children:[
    { path: 'characters', component: PersonajesPageComponent},
    { path: 'locations', component: UbicacionesPageComponent},
    { path: 'episodes', component: EpisodiosPageComponent}
  ]}
  

];
