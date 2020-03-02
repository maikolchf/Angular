import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../Services/data-api.service';
import { Usuario } from '../Modelos/Usuario-interface';
import { NgForm } from '@angular/forms';
import { Location, DOCUMENT } from '@angular/common';
import Swal from 'sweetalert2';
import {CanActivate, Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
 

  constructor(public dataapiservice:DataApiService, private location:Location, private router: Router) { }
  public usuarios: Usuario;

  ngOnInit(){
    this.listarUsuarios();
  }

  ///listar usuarios
  listarUsuarios(){
    this.dataapiservice
    .getAllUsuarios()
    .subscribe((usuarios: Usuario) => (this.usuarios = usuarios));
  }

  ///registrar usuario
  guardarUsuario(UsuarioForm:NgForm):void{
    if(UsuarioForm.value.idUsuario== null){
      this.dataapiservice.saveUsuario(UsuarioForm.value).subscribe(usuario => location.reload());
    }else{
      ///actualizar
      console.log('actualizar libro');
    }

  }

  seleccionarUsuario(usuario:Usuario):void{
    this.dataapiservice.selectUsuario = Object.assign({},usuario);
    console.log(usuario);
    console.log(this.dataapiservice.selectUsuario);
  }

  eliminarUsuario(id:number): void{
    Swal.fire({
      title: 'Quieres eliminar este Usuario?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminalo!'
    }).then((result) => {
      
      if (result.value) {
        let resultado = this.dataapiservice.deleteUsuario(id).subscribe();
        Swal.fire(
          'Eliminado!',
          'Usuario eliminado correctamente!',
          'success'                     
        )
        this.listarUsuarios();               
      }        
    });       
  }
}
