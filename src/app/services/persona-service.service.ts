import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { ActivosFijos } from '../models/activosFijos';
import { Observable, delay, map } from 'rxjs';
import { environment } from '../../enviroments/enviroment';
import { Personas } from '../models/personas.model';

interface State {
  persona: Personas[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class PersonaServiceService {

  private cabeceras: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  private http = inject(HttpClient);

  #state = signal<State>({
    loading: true,
    persona: [],
  });


  constructor() {

    this.http.get<Personas[]>(`${environment.apiUrl}persona`)
    .pipe(delay(500))
    .subscribe(res => {
      this.#state.set({
        loading: true,
        persona: res
      })
    })

   }

}
