import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { EpisodiosPageComponent } from 'src/app/pages/episodios-page/episodios-page.component';
import { PersonajesPageComponent } from 'src/app/pages/personajes-page/personajes-page.component';
import { UbicacionesPageComponent } from 'src/app/pages/ubicaciones-page/ubicaciones-page.component';
import { HomeComponent } from '../home.component';
import { DetalleEpisodioComponent } from '../../components/detalle-episodio/detalle-episodio.component';
import { ComparacionComponent } from '../../pages/comparacion/comparacion.component';

const routes: Routes =  [
  { 
    path: '',
    children:[
    { path: '', component: HomeComponent},
    { path: 'characters', component: PersonajesPageComponent },
    { path: 'locations', component: UbicacionesPageComponent },
    { path: 'episodes', component: EpisodiosPageComponent },
    { path: 'detalle/:id', component: DetalleEpisodioComponent },
    { path: 'comparacion', component: ComparacionComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingRoutingModule { }
