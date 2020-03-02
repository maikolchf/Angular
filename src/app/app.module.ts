import { RouterModule, Routes } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

//servicios
import {EquipoService} from './equipo.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { PiepaginaComponent } from './piepagina/piepagina.component';
import { __importStar } from 'tslib';
import { LoginComponent } from './login/login.component';
import { from } from 'rxjs';
import { IndexComponent } from './index/index.component';
import { EquipoComponent } from './equipo/equipo.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { RegistroComponent } from './registro/registro.component';

import { HttpClientModule } from '@angular/common/http'
///services
import { DataApiService } from './Services/data-api.service';


const rutas:Routes=[
  { path:'Login', component: LoginComponent },
  { path:'Registro', component: RegistroComponent },
  { path:'Equipo/:id', component: EquipoComponent },
  { path:'', component: IndexComponent, pathMatch:'full' },
  { path:'**', redirectTo: '/' , pathMatch:'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    CuerpoComponent,
    PiepaginaComponent,
    LoginComponent,
    IndexComponent,
    EquipoComponent,
    DatepickerComponent,
    RegistroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(rutas),
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatRippleModule,
    HttpClientModule
  ],
  providers: [  EquipoService, DataApiService ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
