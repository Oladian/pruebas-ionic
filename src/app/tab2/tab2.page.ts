import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CiudadesService } from '../ciudades.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  constructor(private servicio: CiudadesService,
    private router: Router){  }

  alta(nombreCiudad: string, codPosCiudad: number, habitantesCiudad: string, idiomaCiudad: string) {
    const ciudad = {
      nombre : nombreCiudad,
      codPos : codPosCiudad,
      habitantes : habitantesCiudad,
      idioma : idiomaCiudad
    }
      
    this.servicio.createCiudad(ciudad).subscribe(
      () => this.router.navigate([''])
    )
    
  }
  
}
