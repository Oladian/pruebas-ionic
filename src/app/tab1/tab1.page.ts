import { Component } from '@angular/core';
import { Ciudades } from '../modelos/ciudades';
import { Observable } from 'rxjs';
import { CiudadesService } from '../ciudades.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  ciudades: Observable<Ciudades[]>;

  constructor(private servicio: CiudadesService,
    private route: Router) {
      console.log("HOSO")
    this.ciudades = servicio.getCiudades();
  }

  borrarCiudad(ciudad: Ciudades){
    this.servicio.deleteCiudad(ciudad).subscribe(
      () => {
        this.ciudades = this.servicio.getCiudades();
      }
    );
    
  }

}
