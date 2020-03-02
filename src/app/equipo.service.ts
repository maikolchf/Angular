import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  equipo:any[] = [{
    nombre:'Michael',
    especialidad:'HTLM',
    descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, doloremque repellat dicta distinctio et numquam fuga itaque aspernatur eaque pariatur explicabo, repudiandae a consequatur ut labore saepe qui expedita eveniet.'
  },
  {
    nombre:'Anthonio',
    especialidad:'CSS',
    descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, doloremque repellat dicta distinctio et numquam fuga itaque aspernatur eaque pariatur explicabo, repudiandae a consequatur ut labore saepe qui expedita eveniet.'
  }]
  constructor() {
    console.log('funcionando');
   }

   //ESPORTAR ARREGLO
   obtenerEquipo(){
     return this.equipo;
   }

   obtenerUno(i){
     return this.equipo[i];
   }
}

