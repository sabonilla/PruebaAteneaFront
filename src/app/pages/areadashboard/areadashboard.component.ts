import { Component, inject } from '@angular/core';
import { AreasServiceService } from '../../services/areas-service.service';
import { TableModule } from 'primeng/table'
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  standalone: true,
  imports: [CommonModule, TableModule,RouterModule ],
  templateUrl: './areadashboard.component.html',
  styles: ``
})
export default class AreadashboardComponent {

  public areaService = inject(AreasServiceService);


  constructor(){


   this.areaService.computedAreas


  }
}
