import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Ciudades } from './modelos/ciudades';

@Injectable({
  providedIn: 'root'
})

export class CiudadesService {

  url = 'http://localhost:3000/ciudades';

  constructor(private http: HttpClient) { }

  getCiudades(){
    return this.http.get<Ciudades[]>(this.url);
  }

  getCiudad(id: string){
    return this.http.get<Ciudades>(this.url+'/'+id);
  }

  createCiudad(ciudad: Ciudades){
    return this.http.post(this.url, ciudad);
  }

  updateCiudad(ciudad: Ciudades){
    return this.http.put(this.url+'/'+ciudad.id, ciudad);
  }

  deleteCiudad(ciudad: Ciudades){
    return this.http.delete(this.url+'/'+ciudad.id);
  }
}
