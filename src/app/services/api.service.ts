import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Result, Personaje, ResultUbicacion, ResultEpisodio } from '../interfaces/personajesCards.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = 'https://rickandmortyapi.com/api';

  selected: string = ''

  getPersonajes(): Observable<Result[]>
  {
    return this.http.get<Result[]>(`${this.baseUrl}/character`);
  }

  getPorUbicacion(): Observable<ResultUbicacion[]>
  {
    return this.http.get<ResultUbicacion[]>(`${this.baseUrl}/location`);
  }

  getPorEpisodios(): Observable<ResultEpisodio[]>
  {
    return this.http.get<ResultEpisodio[]>(`${this.baseUrl}/episode`);
  }

  getUnEpisodio(id: number): Observable<ResultEpisodio>
  {
    return this.http.get<ResultEpisodio>(`${this.baseUrl}/episode/${id}`);
  }

  getMultiplesPersonajes(ids: string[]): Observable<Result[]>
  {
    this.selected = Object.values(ids).toString();
    return this.http.get<Result[]>(`${this.baseUrl}/character/${this.selected}`)
  }

  constructor(private http: HttpClient) { }
}
