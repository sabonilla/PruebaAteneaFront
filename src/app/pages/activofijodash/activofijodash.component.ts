import { Component, inject } from '@angular/core';
import { ActivoFijoServiceService } from '../../services/activo-fijo-service.service';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  templateUrl: './activofijodash.component.html',
  styles: ``
})
export default class ActivofijodashComponent {

  public activosService = inject(ActivoFijoServiceService);


  constructor(){


   this.activosService.computedActivos


  }
}
