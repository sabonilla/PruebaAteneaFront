import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { ActivosFijos } from '../models/activosFijos';
import { Observable, delay, map } from 'rxjs';
import { environment } from '../../enviroments/enviroment';

interface State {
  activos: ActivosFijos[];
  loading: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class ActivoFijoServiceService {

  private cabeceras: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  private http = inject(HttpClient);

  #state = signal<State>({
    loading: true,
    activos: [],
  });

  computedActivos = computed(() => this.#state().activos);

  constructor() {
    this.http.get<ActivosFijos[]>(`${environment.apiUrl}activos`)
    .pipe(delay(500))
    .subscribe(res => {
      this.#state.set({
        loading: true,
        activos: res
      })
    })
   }

}
