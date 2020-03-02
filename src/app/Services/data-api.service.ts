import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import {AuthService} from './auth.service';
import { map } from 'rxjs/operators';

import { Usuario } from '../Modelos/Usuario-interface'

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  Usuarios: Observable<any>;
  Usuario:Observable<any>;
  
  public selectUsuario: Usuario = {
    id:null ,
    nombre:'',
    apellidoPaterno:'',
    apellidoMaterno:'',
    cedula:'',
    telefono:'',
    correo:'',
    contrasenna:''
  }
  constructor(private http:HttpClient, private authService: AuthService) { }

  headers:HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json",
  });
  getAllUsuarios(){
    const url_api ='http://localhost:7000/api/Usuarios';
    return this.http.get(url_api);
  }
  getUsuarioId(id:number){
    const url_api = `http://localhost:7000/api/Usuarios/${id}`;
    return (this.Usuario = this.http.get(url_api));
  }
  saveUsuario(usuario: Usuario){
    const url_api = `http://localhost:7000/api/Usuarios`;
    return(this.http.post(url_api, usuario,{headers: this.headers}))
    .pipe(map(data=> data));
  }

  updateUsuario(Usuario: Usuario){
    //Obtener token
    //Not null
    let token = this.authService.getToken();
    const url_api = `http://localhost:7000/api/Usuarios?access_token=${token}`;
    return(this.http.put<Usuario>(url_api, Usuario,{headers: this.headers}))
    .pipe(map(data=> data));

  }

  deleteUsuario(id:number){
    const url_api = `http://localhost:7000/api/Usuarios/${id}`;
    return(this.http.delete<Usuario>(url_api,{headers: this.headers}))
    .pipe(map(data=> data));
  }
}
