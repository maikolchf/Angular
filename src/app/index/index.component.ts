import { Component, OnInit } from '@angular/core';
import {  EquipoService } from '../equipo.service';
import { DataApiService } from '../Services/data-api.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  equipo:any[] = [];

  constructor(private dataApi:DataApiService){

  }

  getListUsuario(){
    this.dataApi.getAllUsuarios().subscribe((Usuarios)=> console.log(Usuarios))
  }
  ngOnInit(): void {
    this.getListUsuario();
  }

}
