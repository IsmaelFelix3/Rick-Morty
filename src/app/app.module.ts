import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { PrimeNGModule } from './primeNG/prime-ng/prime-ng.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PersonajesPageComponent } from './pages/personajes-page/personajes-page.component';
import { UbicacionesPageComponent } from './pages/ubicaciones-page/ubicaciones-page.component';
import { EpisodiosPageComponent } from './pages/episodios-page/episodios-page.component';
import { UbicacionesComponent } from './components/ubicaciones/ubicaciones.component';
import { EpisodiosComponent } from './components/episodios/episodios.component';
import { DetalleEpisodioComponent } from './components/detalle-episodio/detalle-episodio.component';
import { MiniTarjetaComponent } from './components/mini-tarjeta/mini-tarjeta.component';
import { ComparacionComponent } from './pages/comparacion/comparacion.component';
import { ComparacionTarjetaComponent } from './components/comparacion-tarjeta/comparacion-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonajesComponent,
    SidenavComponent,
    PersonajesPageComponent,
    UbicacionesPageComponent,
    EpisodiosPageComponent,
    UbicacionesComponent,
    EpisodiosComponent,
    DetalleEpisodioComponent,
    MiniTarjetaComponent,
    ComparacionComponent,
    ComparacionTarjetaComponent
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot([{path: 'home', component: HomeComponent}, { path: '', redirectTo: '/home', pathMatch: 'full' }]),
    AppRoutingModule,
    HttpClientModule,
    PrimeNGModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
