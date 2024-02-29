import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { ActivosFijos } from '../models/activosFijos';
import { Observable, delay, map } from 'rxjs';
import { environment } from '../../enviroments/enviroment';
import { Areas } from '../models/areas.model';
interface State {
  areas: Areas[];
  loading: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class AreasServiceService {


  private http = inject(HttpClient);

  #state = signal<State>({
    loading: true,
    areas: [],
  });

  computedAreas = computed(() => this.#state().areas);

  constructor() {


    this.http.get<Areas[]>(`${environment.apiUrl}area`)
    .pipe(delay(500))
    .subscribe(res => {
      this.#state.set({
        loading: true,
        areas: res
      })
    })



  }

}
